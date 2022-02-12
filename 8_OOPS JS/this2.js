// Node  + strict

'use strict'


//global -

// console.log(this) 


// function f(){
//        console.log(this)
// }

// f()


// let obj = {
//        name : 'Rahul',

//        f: function(){
//               console.log(this)
//        }
// }

// obj.f()



let obj2 = {
       name :'Mrinal',

       f: function f(){
              function g(){
                     console.log(this)
              }

              g();
       }
}


obj2.f()