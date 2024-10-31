"use strict";
{
    // spread opreator
    const bro1 = ["amanullah", "maksudullah"];
    const bro2 = ["ismail", "hasan"];
    bro1.push(...bro2);
    //   ["amanullah", "maksudullah","ismail", "hasan"];
    const mentor1 = {
        js: "rezwan",
        react: "sujon",
        css: "mim",
    };
    const mentor2 = {
        ts: "rezwan",
        jest: "sujon",
        next: "mim",
    };
    const mentorlist = Object.assign(Object.assign({}, mentor1), mentor2);
    //rest opreator
    //   const greetfriend = (friend1: string, friend2: string, friend3: string) => {
    //     console.log(`hi ${friend1} hello ${friend2} whats up ${friend3}`);
    //   };
    //   greetfriend("rohim", "tuhin", "mehadi");
    const greetfriend = (...friends) => {
        friends.forEach((friend) => console.log(`hi ${friend}`));
    };
    greetfriend("rohim", "tuhin", "mehadi");
    //destructing
}
