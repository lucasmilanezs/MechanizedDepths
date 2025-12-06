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
