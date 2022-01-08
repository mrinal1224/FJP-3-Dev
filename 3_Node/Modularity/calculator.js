function add(a,b){
       console.log("the Sum is ",a+b)
}

function sub(a,b){
       console.log('The difference is' , a-b)
}

function mul(a,b){
       console.log('The product is' , a*b)
}

function div(a,b){
       console.log('The quotient is' , a/b)
}


module.exports={
       addition : add,
       substarct : sub,
       Multiply : mul,
       division : div,
}



// module.exports is a Object provided by Node.js by
// which you can export your functions in key value pair
// you will use your functions with the keys you have assigned
// to them

