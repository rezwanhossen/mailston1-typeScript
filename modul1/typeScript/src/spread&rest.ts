{
  // spread opreator
  const bro1: string[] = ["amanullah", "maksudullah"];
  const bro2: string[] = ["ismail", "hasan"];
  bro1.push(...bro2);
  //   ["amanullah", "maksudullah","ismail", "hasan"];
  const mentor1: {
    js: string;
    react: string;
    css: string;
  } = {
    js: "rezwan",
    react: "sujon",
    css: "mim",
  };

  const mentor2: {
    ts: string;
    jest: string;
    next: string;
  } = {
    ts: "rezwan",
    jest: "sujon",
    next: "mim",
  };
  const mentorlist = {
    ...mentor1,
    ...mentor2,
  };
  //rest opreator
  //   const greetfriend = (friend1: string, friend2: string, friend3: string) => {
  //     console.log(`hi ${friend1} hello ${friend2} whats up ${friend3}`);
  //   };
  //   greetfriend("rohim", "tuhin", "mehadi");
  const greetfriend = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`hi ${friend}`));
  };
  greetfriend("rohim", "tuhin", "mehadi");
  //destructing
}
