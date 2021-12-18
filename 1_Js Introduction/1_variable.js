// // variable declartion

// // var , let , const


// var a; // variable will be initialized with undefined
// console.log(a)

// //JS is a dynamically typed langauge dataType is npot specified here

// a = 3
// console.log(a)

// a= "I am String"
// console.log(a)

// a= true
// console.log(a)


// a = null
// console.log(a)



// DataTypes in JavaScript - number , string , boolean , undfined , null

// var b = 2.3 // as a number
// var c = 'd' // string
// var d = 'I am String' // string



// // Var has some Problems 

// // 1st Problem with var - Redeclartion
// var b = 'hello'

// console.log(b) // hello
// var b = 'bye'

// console.log(b)// bye


// // overcoming Redeclation

// // use let keyword

// let b = 'hello'

// console.log(b) // hello
// let b = 'bye' // redcalrtion is not allowed with let keyword

// console.log(b)// Error



// let b = 'hello'

// //console.log(b) // hello
// b = 2 // reassingning is allowed

// console.log(b)// bye



// // loops -

// //for loop
// //Prime Number 

// var flag = true

// var num = 10

// for(var i=2 ; i*i <= num ; i++ ){
//        if(num%i==0){
//               flag = false
//               break
//        }
// }


// if(flag){
//        console.log('Number is Prime')
// }

// else{
//        console.log('Number is Not Prime')
// }


//2nd Problem with var - scoping


// if(10%2==0){
//        let a = 2
//        console.log('I am from the If block' , a)
// }

// console.log('I am from outside if block' , a)




//Const 


const a;

var b;
let c;

//console.log(a)
console.log(b)
console.log(c)























