// File System Module


// ****files****//

const fs = require('fs')

const path = require('path')


// //1. we will be reading writing updating and deleting files


//  let content = fs.readFileSync('f1.txt')
//  console.log("this is F1 data -> "+ content)


// //Writing to a file
// //writeFileSync
// // if the file name that is passed doesnt not exists the a new file will be created with its
// //name and the data will be written on that file
// fs.writeFileSync('f1.txt', 'This data will be written on F2')

// fs.writeFileSync('f3.txt' , 'This data will be written on F3')
// console.log('Data written')


// // append a file

// // appnedFileSync method adds new data to a previosuly written file

//  fs.appendFileSync('f2.txt' , ' This is new data')


// // delete a file

// // unlinkSync

// fs.unlinkSync('f2.txt')
// console.log('F2 Deleted')

//*****Directories*****//

// creating a directory

// mkdirSync method is used to create a new Directory or folder

//  fs.mkdirSync('myDirectory')
//  console.log('Directory Created')


//delete a directory
//rmdirsync

// fs.rmdirSync('myDirectory')
// console.log('Directory Removed')


// To check whether a directory exists or not 
// existsSync

// this returns true or false based on whether the passed directory exists or not

// let doesExist = fs.existsSync('f1.txt')
// //console.log(doesExist)

// let statsOfDirectory = fs.lstatSync('myDirectory')
// //console.log(statsOfDirectory)


// console.log('isFile?' , statsOfDirectory.isFile())

// console.log('isDirectory?', statsOfDirectory.isDirectory())



// readdirSync

// readdirSync is a method which is used to check content inside a directory

let folderPath = 'D:\\Batches\\FJP3 Dev\\3_Node\\myDirectory'

let folderContent = fs.readdirSync(folderPath)

console.log('Folder Contenet ' + folderContent)



//Copying Files

//src file , destination path

let srcFilePath = 'D:\\Batches\\FJP3 Dev\\3_Node\\myDirectory\\f1.txt'

let destinationPath = 'D:\\Batches\\FJP3 Dev\\3_Node\\myDirectory2\\'


let tobecopiedFileName =  path.basename(srcFilePath)
console.log(tobecopiedFileName)


let destPath = path.join(destinationPath , tobecopiedFileName)
console.log(destPath)

fs.copyFileSync(srcFilePath , destPath)
console.log('File Copied')

























