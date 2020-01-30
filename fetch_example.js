// let res_promise_object = fetch("https://jsonplaceholder.typicode.com/posts");
// // this will demonstrate that fetch will always return a promise object!
// $("#display_fetch").text(res_promise_object);
// // thus needs to provide a resolve function to parse the res to json object
// let res_json_object = res_promise_object.then(res => res.json());

// $("#display_fetch").append(
//   `<br><span id="my_json_object"> ${res_json_object} </span>`
// );

// res_json_object.then(data => {
//   console.log(data); // data is an array of 100 objects!
//   data.forEach((i, index) => {
//     $("#display_fetch").append(
//       `<br><span id="part_${index}">${JSON.stringify(i)}</span>`
//     );
//   });
// });

//finally combine above in one call, the promise way!
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => {
    console.log(data); // data is an array of 100 objects!
    data.forEach((i, index) => {
      $("#display_fetch").append(
        `<br><span id="part_${index}">${JSON.stringify(i)}</span>`
      );
    });
  });
//next, the async/await way!
async function fetchParts() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let res_json = await res.json();
  console.log(res_json);
  res_json.forEach((i, index) => {
    $("#display_fetch").append(
      `<br><span id="part_${index}"> ${JSON.stringify(i)} </span>`
    );
  });
}
fetchParts();
