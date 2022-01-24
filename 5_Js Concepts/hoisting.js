
console.log(a) // undefined with var 
// initialization error with let and const

// Temporal Dead Zone - it is just a area where if you try to access variables defined with 
// let and const before their initialization you wont be able to do it.


greet()
console.log(a)
let a = 2

console.log(a)

function greet(){
      console.log('Hello') 
}













