function greeting(name, role) {
  console.log(`Hello my name is ${name}`);
  console.log(`I'm a ${role}`);
}

setTimeout(greeting, 3000, "Nathan", "Software developer");


setTimeout(
  function (firstName) {
    console.log(firstName);
  },
  4000,
  "Mrinal"
);

// let count = 0;

// // function creation
// let interval = setInterval(function () {
//   // increasing the count by 1
//   count += 1;

//   console.log(count);

//   // when count equals to 5, stop the function
//   if (count === 5) {
//     clearInterval(interval);
//   }

//   // display the current time
// }, 2000);
