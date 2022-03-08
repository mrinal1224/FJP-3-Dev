
const lib = require('./lib')

let amount = 2000
let tocut = 200


//lib.updateAccount('Tv' , chargeDebitCard)



let promiseObj = lib.promiseUpdateFunction('Tv').then(chargeDebitCard())





function chargeDebitCard(){
       amount = amount-tocut
       console.log(`Remaining amount is ${amount}`)
}




