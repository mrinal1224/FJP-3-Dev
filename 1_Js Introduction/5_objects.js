// in JS objects are basically key value pair

//to declare an obj

// let obj = {} // object declaration


// let person = {
//       name : 'Mohit',
//       age : 20,
//       Phone : 12345
           
// }

//console.log(person)


const cap = {
       firstName : 'Steve',
       lastName : 'rogers',
       friends : ['Bucky' , 'Tony' , 'Dr Banner'],
       age : 102,
       isAvenger : true,
       address : {
              state : 'Manhattan',
              city : 'New York'
       },

       sayHi : function(){
              console.log('Captain Says hi')
       }

}

//console.log(cap)

 console.log(cap.firstName) // Dot notation // access a property of an object


 console.log(cap['firstName']) // bracket Notation

//console.log('My best friend is', cap.friends[2]) // accesing array elemet from object

//console.log(cap.address.city) 

//cap.sayHi()


//loop -> for in loop

for(let key in cap){
       console.log("key : " , key , 'Vaule : ' , cap[key] )
}



cap.isAvenger = false // update a property of an object


cap.movies = ['Age of Ultron' , 'First Avenger'] // add new Property to an object


delete cap.age // delete a propery from an object


console.log(cap)









