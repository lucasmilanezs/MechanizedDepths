var MD_TETRA_WEAR_KEY = 'mechanized_tetra_wear'
var MD_TETRA_IModularItem = Java.loadClass('se.mickelus.tetra.items.modular.IModularItem')

ForgeEvents.onEvent('se.mickelus.tetra.effect.ApplyHitTargetEffectsEvent', function (event) {
    var attacker = event.getAttacker()
    if (!attacker || attacker.level().isClientSide()) return

    var data = attacker.getPersistentData()
    if (!data.contains(MD_TETRA_WEAR_KEY)) return
    var amount = Math.round(data.getFloat(MD_TETRA_WEAR_KEY))
    data.remove(MD_TETRA_WEAR_KEY)

    var stack = event.getUsedItemStack()
    if (amount <= 0 || stack.isEmpty() || !(stack.getItem() instanceof MD_TETRA_IModularItem)) return
    stack.getItem().applyDamage(amount, stack, attacker)
})
