{
  class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(numOfHoure: number) {
      console.log(`${this.name} will sleep ${numOfHoure}`);
    }
  }
  class student extends Parent {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }
  const st1 = new student("rezwan", 24, "khulna");
  st1.getSleep(6);
  class teacher extends Parent {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
    getSleep(numOfHoure: number) {
      console.log(`${this.name} will sleep ${numOfHoure}`);
    }
    takeClass(numOFCls: number) {
      console.log(`${this.name} par day numder of class ${numOFCls}`);
    }
  }
  const tec1 = new teacher("jubber", 34, "khulna", "lec.");
  tec1.getSleep(5);
  tec1.takeClass(3);
}
