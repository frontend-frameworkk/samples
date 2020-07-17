class Greeter {
  constructor(private greeting: string) {}

  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");

/*
class Greeter {
    private greeting: string;
     
    constructor(greeting: string) {
        this.greeting = greeting;
    }
     
    greet() {
        return "Hello, " + this.greeting;
    }
}
 
let greeter = new Greeter("world");
*/
