let obj = {
  name: "Adam",
  address: {
    country: "USA",
    state: {
      stateName: "New York",
      pincode: 123456,
    },
  },
};

// let obj2 = {...obj , address : {...obj.address , state : {...obj.address.state}}  } // shallow copy

// obj.address.country = "India";

// obj.address.state.pincode = 222222

// //let obj2 = JSON.parse(JSON.stringify(obj)); // Deep Copy

// console.log(obj);
// console.log(obj2);


let test = JSON.stringify(obj)

console.log(test)
