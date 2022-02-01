// Higher order functions are functions that operate on other functions,
// either by taking them as arguments or by returning them.
// In simple words,
// A Higher-Order function is a function that receives a function as an argument
// or returns the function as output.

let arr = [2, 5, 9, 8, 15, 11, 6];

// Map function

//map is itslef a function
//map takes a callback function as an arg
//map will call the callback functions as many times as the elements in the array
//map will process every value and will apply the instruction that inside the callback function
//map returns a new array

// let sqarr = arr.map(function squarer(v) {
//   return v * v;
// });

// console.log(sqarr);

// console.log(arr);

let nameArr = ["Mrinal", " Harsh", "Utkarsh"];

// print names using the map function

let nameArr2 = nameArr.map(function(n){
       return n;
})

console.log(nameArr2)


// 
