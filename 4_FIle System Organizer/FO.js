// We will be creating a File System Organizer//
//Features of the Project -
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extension
// like text files will go into text File Folder .exe files will go into application folder and so on
// so at the end you will have a arranged set of files in specific folders

//js mein input Array ke from mein jaata hai and that is array is process.argv Array

let inputArr = process.argv.slice(2);

//[Node FO.js tree folderpath]

let command = inputArr[0]

switch (command) {
  case "tree":
    console.log("Tree Implemented");
    break;
  case "organize":
    console.log("Organize Implememted");
    break;
  case "help":
    helpfn()
    break;

  default:
    console.log("PLEASE ENTER A VALID Command");
    break;
}



function helpfn(){
   console.log(`List of all the Commands-
                    1) Tree Command - node FO.js tree <dirname>
                    2) Organize Command- node FO.js organize <dirname>
                    3) Help Command - node FO.js help`)
}






