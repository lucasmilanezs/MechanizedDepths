JEIEvents.information(event => {
  const vitalHerbs = [
    "vital_herbs:bleeding_heart",
    "vital_herbs:needle_heart"
  ];

  vitalHerbs.forEach(id => {
    event.addItem(id, [
      "Rarely found in the wild, but most easily obtained by right-clicking planted wheat with a Rose Needle. A herb shaped through sacrifice rather than soil."
    ]);
  });
});

// ROSE NEEDLE
JEIEvents.information(event => {
  event.addItem('kubejs:rose_needle', [
    "A needle used to obtainn vital Herbs. Right-clicking certain crops can yield differnt vital herbs."
  ]);
});

// PACKED GRAVEL
JEIEvents.information(event => {
  event.addItem('kubejs:packed_gravel', [
    "Hold a block of packed gravel and right-click on water to wash it for a chance to obtain gold nuggets."
  ]);
});