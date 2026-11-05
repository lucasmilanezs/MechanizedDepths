// =============================================================================
// Tetra Tooltip Sync — Client Side                          tooltip_sync_client.js
// =============================================================================
// Receives the Tetra × Tinkers tooltip mapping that the server sends on login
// (server_scripts/tetra_tinkers/tooltip_sync.js) and stores it where
// tooltip_client.js already looks for it. Needed on dedicated servers, where
// the client never runs the server scripts that build global.TetraToolTips.
// =============================================================================

var MD_TT_SYNC_CLIENT_CHANNEL = "mechanized_tetra_tooltips"
var MD_TT_SYNC_CLIENT_VERSION = 1

NetworkEvents.dataReceived(MD_TT_SYNC_CLIENT_CHANNEL, function(event) {
    var data = event.data
    if (!data) return
    try {
        var version = Number(data.getInt("version"))
        if (version !== MD_TT_SYNC_CLIENT_VERSION) {
            console.warn("[Mechanized/TooltipSync] Ignoring tooltip data version " + version + " (expected " + MD_TT_SYNC_CLIENT_VERSION + ")")
            return
        }

        var count = Number(data.getInt("count"))
        var expectedLength = Number(data.getInt("length"))
        var json = ""
        for (var i = 0; i < count; i++) {
            json += String(data.getString("chunk" + i))
        }
        if (json.length !== expectedLength) {
            throw new Error("expected " + expectedLength + " characters, received " + json.length)
        }

        var mapping = JSON.parse(json)
        if (!mapping || !mapping.materials || !mapping.modules || !mapping.variants) {
            throw new Error("payload is missing materials, modules or variants")
        }
        global.TetraToolTips = mapping
        console.info("[Mechanized/TooltipSync] Received Tetra tooltip data for " + Object.keys(mapping.materials).length + " materials")
    } catch (e) {
        console.error("[Mechanized/TooltipSync] Could not read Tetra tooltip data: " + e)
    }
})
