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

//let obj2 = {...obj , address : {...obj.address}} // shallow copy

obj.address.country = "India";

let obj2 = JSON.parse(JSON.stringify(obj)); // Deep Copy

console.log(obj);
console.log(obj2);
