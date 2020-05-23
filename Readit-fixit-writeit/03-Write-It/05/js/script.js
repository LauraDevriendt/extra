const fees = [
  {
    price: 10.75,
    title: "Normaal tarief"
  }, {
    price: 9.75,
    title: "Kortingstarief"
  }, {
    price: 8.05,
    title: "Kinepolis Student Card"
  }
];

const extras = [
  {
    price : 2.00,
    title : "Supplement 3D"
  }, {
    price : 2.00,
    title : "Supplement Escape"
  }, {
    price : 3.00,
    title : "Supplement HFR 3D"
  }, {
    price : 0.75,
    title : "Supplement Film Lange Speelduur (>/=2u15)"
  }, {
    price : 2.50,
    title : "Supplement Cosy Zone"
  }, {
    price : 1.00,
    title : "Supplement Atmos"
  }
];

fees.forEach(fee => {
  extras.forEach(extra => {
    document.write(`<p>${fee.title} + ${extra.title} = ${fee.price + extra.price}</p>`)
  });
  
});

// * Toon alle mogelijke tarieven. Telkens het basis-tarief en dan telkens in combinatie met één supplement.
// * Geef de correct prijs weer.