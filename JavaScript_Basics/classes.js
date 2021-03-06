class Student {
  // onlyname; // This should not have let or const only in classes
  constructor (name, age){ // name and age are arguments given to object at the time of creation of object
    this.name = name; // This initializes the local variable as name passed in argument
    this.age = age; // This initializes the local variable as age passed in argument
  }
}

let Swapnil = new Student("Swapnil", 19); // This way we can create new objects with arguments

console.log(Swapnil.name);// Output Swapnil

console.log(Swapnil.age);// Output 19

class StudentInfo {
  // college = "SIES"; // This is allowed above ES7, ES8
  constructor (name){ // name and age are arguments given to object at the time of creation of object
    this.name = name; // This initializes the local variable as name passed in argument
    this.college = "SIES"; // We want the College to be same for all stundents that's why it is decleared outside of constructor
  }
  getNameAndCollege (){ // This is a methon in Stdent
    console.log(`${this.name} ${this.college}`);
  }
}

let SwapnilInfo = new StudentInfo("Swapnil Bio");
SwapnilInfo.getNameAndCollege();