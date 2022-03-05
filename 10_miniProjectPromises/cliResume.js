const inquirer = require("inquirer");

const cp = require('child_process')


function displayList(){
       inquirer
       .prompt([
         {
           type: "list",
           name: "selection",
           choices: ["About", "Skills", "Academics", "Projects"],
         },
       ])
       .then(function (ans) {
         if (ans.selection == "About") {
           console.log(`A passionately curious Web developer 
           who just found out that making websites and seeing 
           the magic happen on the Internet is what excites him the most.`);
           displayNext()
         } else if (ans.selection == "Skills") {
           console.log("Java , JavaScript , React , GoLang , Android , React Native");
           displayNext()
         } else if (ans.selection == "Academics") {
            cp.execSync('start chrome https://drive.google.com/file/d/1bzd0XYUbixiMsjIfdPcteskDValQxszU/view?usp=sharing')
            displayNext()
         } else if (ans.selection == "Projects") {
            cp.execSync('start chrome https://github.com/mrinal1224')
            displayNext()
         }
       });
}

displayList()

// Go back option ->

function displayNext(){
       inquirer
  .prompt([
    {
           type : 'list',
           name : 'selection',
           choices : ['Go back' , 'exit']

    }
  ])
  .then(function(ans){
    if(ans.selection =='Go back'){
           displayList()
    }
    else if(ans.selection == "exit"){
           console.log('Resume closed')
    }
  })
}


