// =============================================================================
// Tetra Tooltip Sync — Server Side                                  tooltip_sync.js
// =============================================================================
// tooltip_mapping.js builds global.TetraToolTips on the logical server and
// tooltip_client.js reads it on the client. That only works in singleplayer,
// where both sides run in one JVM and share KubeJS's `global`. On a dedicated
// server the client never runs server scripts, so the tooltip finds nothing.
//
// This file sends the finished mapping to each player when they log in, and
// to everyone online again after /reload rebuilds it.
// client_scripts/tetra_tinkers/tooltip_sync_client.js stores it in the
// client's `global`. In singleplayer the copy is redundant but harmless.
//
// The mapping travels as JSON split across several NBT strings: a single NBT
// string holds at most 65,535 bytes, and the mapping is ~230 KB. Chunks of
// 20,000 characters stay under that limit even if every character needed the
// maximum 3 bytes.
//
// Does not touch schematic_gen.js or tooltip_mapping.js; removing this file
// and its client half restores the previous singleplayer-only behaviour.
// =============================================================================

var MD_TT_SYNC_CHANNEL = "mechanized_tetra_tooltips"
var MD_TT_SYNC_VERSION = 1
var MD_TT_SYNC_CHUNK_CHARS = 20000

// One serialized payload per mapping object, so many logins cost one stringify.
var MD_TT_SYNC_cache = { "source": null, "payload": null }

function MD_TT_SYNC_buildPayload(tooltips) {
    var json = JSON.stringify({
        "materials": tooltips.materials,
        "modules": tooltips.modules,
        "variants": tooltips.variants
    })
    var payload = { "version": MD_TT_SYNC_VERSION, "length": json.length, "count": 0 }
    var count = 0
    for (var start = 0; start < json.length; start += MD_TT_SYNC_CHUNK_CHARS) {
        payload["chunk" + count] = json.substring(start, start + MD_TT_SYNC_CHUNK_CHARS)
        count++
    }
    payload.count = count
    return payload
}

function MD_TT_SYNC_currentPayload() {
    var tooltips = global.TetraToolTips
    if (!tooltips) return null
    if (MD_TT_SYNC_cache.source !== tooltips) {
        MD_TT_SYNC_cache.payload = MD_TT_SYNC_buildPayload(tooltips)
        MD_TT_SYNC_cache.source = tooltips
    }
    return MD_TT_SYNC_cache.payload
}

PlayerEvents.loggedIn(function(event) {
    try {
        var payload = MD_TT_SYNC_currentPayload()
        if (!payload) {
            console.warn("[Mechanized/TooltipSync] global.TetraToolTips is missing; no tooltip data sent to " + event.player.username)
            return
        }
        event.player.sendData(MD_TT_SYNC_CHANNEL, payload)
    } catch (e) {
        console.error("[Mechanized/TooltipSync] Could not send tooltip data to " + event.player.username + ": " + e)
    }
})

// /reload runs the server scripts again while players are online, and they
// got the old mapping at login. tooltip_mapping.js rebuilds the mapping one
// tick after the reload; send the new one to everyone online a tick later. On
// the first load the server doesn't exist yet and Utils.server is null.
function MD_TT_SYNC_sendToOnlinePlayers(server) {
    try {
        var payload = MD_TT_SYNC_currentPayload()
        if (!payload) {
            console.warn("[Mechanized/TooltipSync] global.TetraToolTips is missing after reload; online players keep their old tooltip data")
            return
        }
        // MinecraftServer.sendData sends to every online player.
        server.sendData(MD_TT_SYNC_CHANNEL, payload)
    } catch (e) {
        console.error("[Mechanized/TooltipSync] Could not send reloaded tooltip data: " + e)
    }
}

var MD_TT_SYNC_reloadServer = Utils.server
if (MD_TT_SYNC_reloadServer) {
    try {
        // execute() makes sure the tick is scheduled from the server thread.
        MD_TT_SYNC_reloadServer.execute(function() {
            MD_TT_SYNC_reloadServer.scheduleInTicks(2, function() {
                MD_TT_SYNC_sendToOnlinePlayers(MD_TT_SYNC_reloadServer)
            })
        })
    } catch (e) {
        console.error("[Mechanized/TooltipSync] Could not schedule the tooltip resend after reload: " + e)
    }
}
