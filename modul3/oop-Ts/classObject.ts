{
  // class Animal {
  //   //propaty ar function hola sata hoba method
  //   name: string;
  //   species: string;
  //   sound: string;

  //   constructor(name: string, species: string, sound: string) {
  //     this.name = name;
  //     this.species = species;
  //     this.sound = sound;
  //   }
  //   makSound() {
  //     console.log(`the ${this.name} says ${this.sound}`);
  //   }
  // }
  // const cat = new Animal("parsian", "cat", "mew mew");
  // cat.makSound();
  //==========use parameter propaty=========
  class Animal {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}
    makSound() {
      console.log(`the ${this.name} says ${this.sound}`);
    }
  }
  const cat = new Animal("parsian", "cat", "mew mew");
  cat.makSound();
}
