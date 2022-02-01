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

let nameArr = ['Vishal Kumar' , 'Vaibahv Rawal' , 'Anmol Taneja']


// You have to use map function and you will take out firstName and lastName separately

let modifiedArray = nameArr.map(function(n){
       let partsOfname = n.split(' ');
       return partsOfname
})

console.log(modifiedArray)




const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const inrtToUsd = 74;


let transactioninRs =  transactions.map(function(n){
       return (n/inrtToUsd).toFixed(2)
})

console.log(transactions)

console.log(transactioninRs)







