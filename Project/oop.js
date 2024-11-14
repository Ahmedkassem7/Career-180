// class Employee {
//   constructor(id, name, salary) {
//     this.id = id;
//     this.name = name || "UNknown Name";
//     this.salary = salary < 6000 ? salary + 500 : salary;
//     this.showingSalary = function () {
//       return `AJMMD ${this.name} hava salary ${this.salary}`;
//     };
//   }
//   calcTex() {
//     return this.salary * 0.1;
//   }
// }

// let firstEmp = new Employee(1, "Ali", 2000);
// let SecondEmp = new Employee(2, "Mohamed", 5000);
// let thiredEmp = new Employee(3, "Ali", 6000);
// console.log(firstEmp);
// console.log(firstEmp.id);
// console.log(firstEmp.name);
// console.log(firstEmp.salary);
// console.log(firstEmp.showingSalary());
// console.log(firstEmp.calcTex());
////////////////////////////////
//////////////////////////////
let stringOne = "Hello";
let stringTwo = new String("Hello");
console.log(stringOne);
console.log(stringTwo);
console.log(typeof stringTwo);
console.log(typeof stringTwo);
// ///////////////////////////////////

class Employee {
  static company = "AZWcdsv";
  static company = 550;
  constructor(id, name, salary) {
    this.id = id;
    this.name = name || "UNknown Name";
    this.salary = salary < 6000 ? salary + 500 : salary;
    this.showingSalary = function () {
      return `AJMMD ${this.name} hava salary ${this.salary}`;
    };
  }
  calcTex() {
    return this.salary * 0.1;
  }
}
