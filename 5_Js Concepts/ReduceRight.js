//This will work exactly as Reduce the only thing is that it iterate over the array from right to left

let arr = [2 , 3, 4, 5, 6]


let sumFromRight = arr.reduceRight(function(acc , value){
      let upadtedSum = acc+value
      console.log(upadtedSum)
      return upadtedSum
} , 0)


console.log(sumFromRight)