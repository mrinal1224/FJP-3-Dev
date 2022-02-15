const fs = require("fs");

console.log("Before");

// fs.readFile('f1.txt' , function(err , data){
//        if(err){
//               console.log(err)
//        }
//        console.log('File Data -> ' + data)
// })

let promise = fs.promises.readFile("f1.txt");


//console.log(promise)






// promise.then(function (data) {
//   console.log("File Data -> "+ data);
// });

// promise.catch(function(err){
//        console.log(err)
// })



console.log("After");
