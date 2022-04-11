'use strict'
// this keyword is for reference purpose to any object or element


// this keyword's value will depend upon how it is called


//console.log(this) // globally this ko call kiya hai 



// function test(){
//        console.log(this) // function ke andar this
// }


//  test()



// let obj = {
//        name : 'Adam',
//        age : 23,

//        showThis : function(){
//             console.log(this)
//        }
// }

// obj.showThis() // object ke andar ek method mein this ki value object itself hoti hai


let obj2 = {
       name : 'Adam',
       age : 23,

       showThis : function(){
            function test(){
                   console.log(this)
            }

            test()
       }
}


obj2.showThis()


