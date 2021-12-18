



// //Noraml Function

// function sayHi(){
//        console.log('function said hi')
// } // function declaration

// sayHi() // function invokation


// //Parameters in functions

// function add(a , b){
//        console.log("The addition is" , a+b)
// }

// add(2 , 3) // 2 and 3 are arguments


// multiply

function multiply(c , d){ // function defination 
   return c*d
}

let product = multiply(3 ,4) // 12
console.log(product) // prints 12


// function as first class Citizens

let sayHi = function(a , b){ // anonymous functions
       console.log(a+b) // in js you can assign a function to a vaeriable and can call it
} // function Expression


sayHi(2 , 3) // we are calling this later whenerver we want to


//IIFE (Immediately invoked function Expression)


let substract = (function(a,b){
       console.log(a+b)
})(20 , 10)










