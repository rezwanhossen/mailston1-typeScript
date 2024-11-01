{
  //type alias
  type Student = {
    name: string;
    agg: number;
    conact?: string;
    gender: string;
    address: string;
  };

  const student1: Student = {
    name: "abdullah",
    agg: 23,
    gender: "male",
    address: "khulna",
  };
  const student2: Student = {
    name: "ashik",
    agg: 24,
    gender: "male",
    address: "jessor",
  };
  //function ar
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
}
