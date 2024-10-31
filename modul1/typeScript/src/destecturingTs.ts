{
  // amra array ar object ka destructing kore
  const users: {
    id: number;
    name: {
      fastName: string;
      lastName: string;
    };
    contactNo: string;
    address: string;
  } = {
    id: 45,
    name: {
      fastName: "rezwan",
      lastName: "hossen",
    },
    contactNo: "014000000",
    address: "khulna",
  };
  const {
    contactNo,
    id,
    address,
    name: { fastName },
  } = users;

  // array destacturing
  const myFrind = ["soyeb", "sajjad", "abu sayed", "galib", "jubaer"];
  const [a, b, c] = myFrind;
  const [, , d, ...rest] = myFrind;
}
