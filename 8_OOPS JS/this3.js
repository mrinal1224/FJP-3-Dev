'use strict'

//console.log(this) // window Object


// function f(){
//        console.log(this)
// }

// f()



let obj = {
       f: function(){
              console.log(this)
       }
}

obj.f()


// let obj = {
//        f: function(){
//               function g(){
//                      console.log(this)
//               }
//               g()
//        }
// }

// obj.f()