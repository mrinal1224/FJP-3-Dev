let arr = [ [1 , 2, 3, 4] , [16 , 7 ,8] ]


let arr2 = [...arr]


arr[2] = 23

arr2[2] = 47


console.log(arr) // [1 , 2, 3, 4 , 5]
console.log(arr2)// [1 , 2, 3, 4 , 5]