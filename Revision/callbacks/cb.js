function printName(firstName , cb){
 console.log(firstName)
 cb('Yadav')

}
function printLastName(LastName){
   console.log(LastName)
}

printName('Shashikant' , printLastName)
