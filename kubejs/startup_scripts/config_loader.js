global.ROUTINE_CFG = {
  cm_block_id: 'custommachinery:machine_block',
  be_machine_field: 'machine',
  default_cmd: 9001,
  protocols: {}
};

function loadRoutineConfig() {
  try {
    const path = 'kubejs/config/routine_tablet/protocols.json';
    if (JsonIO.exists(path)) {
      const raw = JsonIO.read(path);
      // merge superficial com defaults
      global.ROUTINE_CFG.cm_block_id     = raw.cm_block_id     ?? global.ROUTINE_CFG.cm_block_id;
      global.ROUTINE_CFG.be_machine_field= raw.be_machine_field?? global.ROUTINE_CFG.be_machine_field;
      global.ROUTINE_CFG.default_cmd     = raw.default_cmd     ?? global.ROUTINE_CFG.default_cmd;
      global.ROUTINE_CFG.protocols       = raw.protocols       ?? {};
      console.log('[RoutineTablet] Config carregada de', path);
    } else {
      console.log('[RoutineTablet] Config não encontrada, usando defaults.');
    }
  } catch (e) {
    console.error('[RoutineTablet] Erro ao ler config:', String(e));
  }
}

