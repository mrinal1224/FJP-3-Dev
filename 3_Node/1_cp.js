//child process is a node module used to create sub proccess within a script
// you can different tasks with your script

 const cp = require("child_process");

// console.log("Opening Calculator");

// cp.execSync("calc");

// console.log("Calculator Opened");

// console.log("Trying to open Vs code");

// cp.execSync("code");

console.log("output"+ cp.execSync('node test.js'))







//cp.execSync('start chrome https://www.pepcoding.com/studentSection')
