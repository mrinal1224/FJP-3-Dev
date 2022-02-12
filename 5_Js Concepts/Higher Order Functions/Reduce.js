// Reduce----->
// * Reduces all the elments in an array into a single value.


let arr = [2 , 3, 4, 5, 6]





let addition = arr.reduce(function(sum , value){
        let updatedSum = sum+value
        return updatedSum     
}, 0)


let product = arr.reduce(function(acc, value){
       let updatedProduct = acc*value
       return updatedProduct     
}, 1)


console.log(product)






