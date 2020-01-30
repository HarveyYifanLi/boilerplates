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

function createPart(part) {
  //function will return a promise that delegates both resolve() call and reject() call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      parts.push(part);
      let foundError = false;
      if (!foundError) {
        resolve();
      } else {
        reject("Error: Something went wrong!");
      }
    }, 4000);
  });
}
//provide resolve function definition to the .then() method
//provide reject function definition to the .catch() method
createPart({ title: "D", price: "$400", moulded: false })
  .then(getParts)
  .catch(err => {
    alert(err);
  });
