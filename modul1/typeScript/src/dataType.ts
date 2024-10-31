{
  // data type ar two type :
  // 1. primitive (number ,string ,boolean , null, undefind, symbol)
  //string
  let firstName: string = "rezwan hossen ";
  // number
  let rollnumber: number = 20221033010;
  // boolean
  let isAdmin: boolean = true;
  // undefind
  let x: undefined = undefined;
  // null
  let y: null = null;

  // 2. nonprimitive( array , tuple , Object)
  //array
  let friends: string[] = ["rabbu", "galib", "jubber"];
  let age: number[] = [24, 23, 25];

  //tuple is a type of array . tuple-->array-->order-->type of value
  let coordenates: [number, number] = [1, 5];
  let ageName: [number, string] = [30, "abdullah"];
  // ageName[0]=23 but ageName[0]='23' not accpeted
  //object , optional and literal types
  const user: {
    //   company: "programming hero";//literal type another one are
    readonly company: string; //fast time decler it is not change able
    fastName: string;
    middleName?: string; //optional type // it is( | ) union type
    lastName: string;
  } = {
    company: "programming hero",
    fastName: "rezwan",
    middleName: "",
    lastName: "hossen",
  };
}
