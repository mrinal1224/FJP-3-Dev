function placeOrder(drink) {
  return new Promise(function (resolve, reject) {
    if (drink === "coffee") {
      resolve("Order for Coffee");
    } else {
      reject("order cannot be Placed");
    }
  });
}

function processOrder(order) {
  return new Promise(function (resolve) {
    console.log("Order is being Processed");
    resolve(`${order} Served`);
  });
}

placeOrder("tea")
  .then(function (demand) {
    console.log(demand);
    let orderIsProccesed = processOrder(demand);
    return orderIsProccesed;
  })
  .then(function (orderServed) {
    console.log(orderServed);
  }).catch(function(err){
         console.log(err)
  });
