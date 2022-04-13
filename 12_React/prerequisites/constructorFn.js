function car(Name , Model , Color){
         this.name = Name
         this.model = Model
         this.color = Color

         this.test = function(){
                console.log(`I am driving ${this.model}`)
         }
}



let car1 = new car('BMW' , 'X6' , 'White')

let car2 = new car('Mercedes' , 'S class' , 'red')

car1.test()


 console.log(car1)

console.log(car2)