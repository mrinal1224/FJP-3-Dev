
// Filter----->
// * Filter returns a new array containing array elements that matches a specified condition
// if the condition stands true it will filter out those elements and will presemt them in a new 
//Array

let arr = [2 , 3, 5, ,7 ,9, 11 , 13 , 12 , 18]

// We need to take out all the Even Numbers 

let evenNoArr = arr.filter(function(n){
      return n%2==0
})

console.log(evenNoArr)


const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

let profitArr = transactions.filter(function(n){
       return n > 0
})

console.log(transactions)

console.log(profitArr)