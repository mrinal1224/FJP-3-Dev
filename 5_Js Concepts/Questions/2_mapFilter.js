
//Map Question


//You have to use map function and have to get all the students name in upperCase



let studentRecords = [
  { name: "Abhishek", id: 123, marks: 98 },
  { name: "Udai", id: 101, marks: 90 },
  { name: "Himanshu", id: 200, marks: 96 },
  { name: "Mrinal", id: 115, marks: 75 },
];


let studentsInUC = studentRecords.map(function(student){
       return student.name.toUpperCase()
})

console.log(studentsInUC)




// Filter

//Retrieve the details of students who scored more than 50 marks and have id greater than 120 from studentRecord
//use filter method to approach the problem


let studentName = studentRecords.filter(function(student){
       return student.marks>=50 && student.id>120
})


console.log(studentName)