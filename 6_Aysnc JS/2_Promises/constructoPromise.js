// let myPromise = new Promise(function(resolve , reject){
//        // Your code will go here
// })

let promise = new Promise(function (resolve, reject) {
  const a = 2;
  const b = 4;

  if (a === b) {
    resolve();
  } else {
    reject();
  }
});

promise
  .then(function () {
    console.log("Equal");
  })
  .catch(function () {
    console.log("Error Not Equal");
  });
