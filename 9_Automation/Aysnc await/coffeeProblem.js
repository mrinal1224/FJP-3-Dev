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

// --> Promisified Solution
// placeOrder("coffee")
//   .then(function (demand) {
//     console.log(demand);
//     let orderIsProccesed = processOrder(demand);
//     return orderIsProccesed;
//   })
//   .then(function (orderServed) {
//     console.log(orderServed);
//   }).catch(function(err){
//          console.log(err)
//   });

// Aysnc Await Solution - >

async function serveOrder() {
  try {
    let orderPlaced = await placeOrder("coffee");
    console.log(orderPlaced); // order for Coffee
    let proccessedOrder = await processOrder(orderPlaced);
    console.log(proccessedOrder);
  } catch (error) {
    console.log(error);
  }
}

serveOrder();
