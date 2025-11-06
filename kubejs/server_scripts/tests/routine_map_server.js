// kubejs/server_scripts/routine_map_server.js
global.ROUTINE_MAP = {
  machineToProtocol: {
    'custommachinery:codex_crucible': 'codex_crucible',
    'custommachinery:alloy_maw':      'alloy_maw',
    'custommachinery:precision_cutter':      'precision_cutting'  // exemplo de máquina extra mapeada
  },
  protocols: {
    codex_crucible: {
      subroutines: ['cc_s1', 'cc_s2', 'cc_s3'],
      // defina os CMDs que batem com seus overrides do item model
      cmd: { cc_s1: 9101, cc_s2: 9102, cc_s3: 9103 }
    },
    alloy_maw: {
      subroutines: ['am_s1', 'am_s2', 'am_s3'],
      cmd: { am_s1: 9201, am_s2: 9202, am_s3: 9203 }
    },
    precision_cutting: {
      subroutines: ['Plate', 'Wire', 'Double_plate', 'Machine_part'],
      cmd: { Plate: 9301, Wire: 9302, Double_plate: 9304, Machine_part: 9303 }
    }
  }
};
  