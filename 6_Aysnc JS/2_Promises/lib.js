const { setTimeout } = require("timers/promises")

function updateAccount(product , cb){
     setTimeout(function(){
            console.log(product + 'Purchased')
            cb()
            cb()
            
     } , 2000)
}



function promiseWaalaUpdateAccount(product){
   return new Promise (function(resolve){
          setTimeout(function(){
                 resolve()
          } , 4000)
   })
}

module.exports={
       updateAccount : updateAccount,
       promiseUpdateFunction : promiseWaalaUpdateAccount
}


