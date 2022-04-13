class Person {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
}

class Teacher extends Person {
  constructor(name , age ,classStrength) {
    super(name, age);
    this.classStrength = classStrength;
  }
}

class Student extends Person {
  constructor(name, age, cgpa) {
    super(name, age);
    this.cgpa = cgpa;
  }
}

let person1 = new Person("Adam", 25);
let teacher1 = new Teacher("Steve", 40, 100);
let student1 = new Student("Mark", 21, 8.0);

console.log(person1);
console.log(teacher1);
console.log(student1);
