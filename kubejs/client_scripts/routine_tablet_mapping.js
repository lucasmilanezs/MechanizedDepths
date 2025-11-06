
const TABLET = 'rt:routine_tablet';

ItemEvents.tooltip(e => {
  e.addAdvanced(TABLET, (stack, adv, lines) => {
    const n = stack.nbt || {};
    const proto = n.protocol;
    const sub   = n.subroutine;
    const subs  = Array.isArray(n.subs) ? n.subs : [];

    lines.add('§8— Routine Tablet —');
    if (!proto) {
      lines.add('§9Protocol → §c(undefined)');
      lines.add('§8Right-click on machine to set a protocol.');
      return;
    }

    lines.add('§9Protocol → §f' + proto);
    lines.add('§aSubroutine → §f' + (sub || '(none)'));
  });
});


JEIEvents.addItems(e => {
  e.add([
    Item.of('rt:routine_tablet', '{protocol:"precision_cutting",subroutine:"Plate",CustomModelData:9301}')
  ]);
});
