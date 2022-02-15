// let myPromise = new Promise(function(resolve , reject){
//        // Your code will go here
// })

let promise = new Promise(function (resolve, reject) {
  const a = 4;
  const b = 4;

  if (a === b) {
    resolve('Yes they are Equal');
  } else {
    reject(" No the values are not Equal");
  }
});

promise
  .then(function (data) {
    console.log('result coming from Resolve Method->'+ data);
  })
  .catch(function (err) {
    console.log('result coming from Reject Method->'+ err);
  });
