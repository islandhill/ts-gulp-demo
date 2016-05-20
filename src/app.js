var f1 = () => {
  console.log('f1 working.');
}

var f2 = () => {
  console.log("f2 working.");
}

class Person {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}
