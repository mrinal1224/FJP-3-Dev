const fs = require('fs')


let buffer = fs.readFileSync('./example.json')

//console.log(buffer)

let data = JSON.parse(buffer)

//console.log(data)

data.push({
       "name" : 'Thor',
       "last name" : 'Odinson',
       "isAvenger": true,
              "friends" : ["Tony" , "Peter" , "Bruce"],
              "age" : 102,
              "address":{
                     "planet" : 'Asgard'
       
              }


})


//console.log(data)


let stringData = JSON.stringify(data)

//console.log(stringData)

fs.writeFileSync("example.json" , stringData)

console.log('JSON file Updated')




