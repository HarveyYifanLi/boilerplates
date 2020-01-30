let parts = [
  { title: "A", price: "$200", moulded: true },
  { title: "B", price: "$200", moulded: true },
  { title: "C", price: "$200", moulded: true }
];

function getParts() {
  //use setTimeout() to mimic some slow process
  //e.g. an action happens only after 2 sec (i.e. mimicing a slow action taking 2 sec to complete)
  setTimeout(() => {
    let output = "";
    parts.forEach(part => {
      output = `<li>${part.title} is moulded? ${part.moulded}!</li>`;
      $("#lists").append(output);
    });
  }, 2000);
}

function createPart(part, callback) {
  //use setTimeout() to mimic some slow process
  setTimeout(() => {
    parts.push(part);
    callback();
  }, 4000);
}
//Order of action: createPart -> getParts
createPart({ title: "D", price: "$400", moulded: false }, getParts);
