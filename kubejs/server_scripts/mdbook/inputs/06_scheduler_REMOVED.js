// =============================================================================
// MDBook — 06_scheduler.js                                    REMOVIDO v3.0
//
// O scheduler foi aposentado. O timing das interações 'time' agora é
// responsabilidade do FTBQ addon timer — uma quest repetível com autoclaim
// que chama /mdbook roll periodicamente para cada player.
//
// Vantagens:
//   - Zero código de loop, zero risco de ghost loop
//   - Estado gerenciado pelo FTBQ (battle-tested, persiste nativamente)
//   - Sobrevive a crashes, reloads e fechamento de mundo sem safeguards
//
// Para disparar manualmente: /mdbook roll
// Para configurar a frequência: ajuste o timer na quest FTBQ correspondente
// =============================================================================
