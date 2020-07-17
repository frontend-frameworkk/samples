// print in console and verify
console.log("hi");

//defining objects
//var is old way of declaring variables which is function scope
//const is declaring const variable, you can reassign the value
//let is new in es6 which is block scope eg if block

// ***** difening simple object by object literal*****
const circle = {
  // {} defines object literal which has key and value pairs
  radius: 1,
  loaction: {
    x: 1,
    y: 1, //here value is object
  },
  draw: function () {
    //here value is function
    console.log("draw");
  },
};

// circle object has 3 members radius , location as properties and draw as method
// all this 3 are properties whether they are properties or methods in some tutorials
//in object oriented programming they are different  we use to properties to define varaibles and methods we define to do some action

circle.draw(); // you access the members by "." dot notation

//prints draw in console

/*
In order to create multiple objects , instead of duplicating object literal like belows we create factory function

const circle = {
    // {} defines object literal which has key and value pairs
    radius: 1,
    loaction: {
      x: 1,
      y: 1,
    },
    draw: function () {
      console.log("draw");
    },
  };
  circle.draw();

  const circle = {
    // {} defines object literal which has key and value pairs
    radius: 1,
    loaction: {
      x: 1,
      y: 1,
    },
    draw: function () {
      console.log("draw");
    },
  };
  circle.draw();
  */

// we can also define objects by factories and constructors
//******Factory function******   return ->no new

function createCircle(radius) {
  return {
    // *return
    radius: radius,
    draw: function () {
      console.log("draw using factory function");
    },
  };
}

const circle1 = createCircle(1); //*createCircle(1)

//*****constructor function*******   this -> new

function Circle(radius) {
  //define function name with uppercase C

  this.radius = radius; //*this is a reference to that object
  this.draw = function () {
    console.log("draw using constructor function");
  };
}

//const another = Circle(); // its global object which returns window object
const another = new Circle(); // create a new circle object by using *new keyword// this create new object which refers to this

/*when you use "new operator"
1) it creates automatically empty Object
2)refers to "this" values
3)explicitly return the value, not required to use return keyword to return the value

new returns empty object , without new it returns window object which is global , which is avaiable in entire application, somehwere in application it may change and get bug in application , so avoid using global objects.
*/

// we can use both of the above patters(factory function or constructor function) to creating objects

/* literals
let x = {}; // it creates an object internally by javascript engine eg: let x= new object; using build-in object contructor but we use let x={};

we have other objects like
 
new string();  //for string we use literals like '',"", ``
new boolean(); //true or false

*/

/* primitive types

let x=10;
let y=x;

x=20;

it prints x=20 and y =10  - both x and y are independent varaibles

// reference types
let x={value:10};  // object
ley y=x;           // y is storing the address of x which storing value 20

x.value=20;

it prints x =y=20;

//primitives copied by their value and objects are copied by their reference
*/

// primitive example - independent
let primitiveNumber = 10;

function increment(primitiveNumber) {
  primitiveNumber++;
}

increment(primitiveNumber);
console.log(primitiveNumber); //10

//refernece example as an object
let refernceNumberobj = { value: 10 };
function increment(refernceNumberobj) {
  refernceNumberobj.value++;
}

increment(refernceNumberobj);
console.log(refernceNumberobj); //11

////*****example primitive type - which stores value

let x = 10;
let y = x;

x = 20;
console.log("primitive values" + x + y); // primitive values2010

////*****example reference type - which stores address
let x1 = { value: 10 };
let y1 = x1;

x1.value = 20;
console.log("reference values" + x1.value + y1.value); //reference values2020

// //***adding properties

function addcircle() {
  this.radius = 10;
  this.draw = function () {
    console.log("adding properties");
  };
}

let addanother = new addcircle();
addanother.location = ""; // added location
addanother["sides"] = 2; //added sides

// example
function addkids(sonName) {
  //this.sonName = sonName;
  console.log(sonName);
}

let objKids = new addkids("Rishik");
objKids.age = 6;
objKids.hobbies = "playing";
objKids.measurements = { weight: 50, height: 5 };
console.log(
  "adding age and measurements to object" +
    objKids.age +
    objKids.measurements.weight +
    objKids.measurements.height
);

//*****/ to delete from object
delete objKids.age;
// console objKids
// output: addkids {measurements: {…}}
// measurements: {weight: 50, height: 5}
// __proto__: Object

//***** for loop and typeof

function Circles(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circles = new Circles(10);

for (let key in circles) {
  if (typeof circles[key] !== "function") {
    console.log(key, circles[key]);
  }
}

//***** Object.key properties

const allkeys = Object.keys(circles);
console.log("Object.key properties " + allkeys);

//***** if
if ("radius" in circles) console.log("radius is dere in circle object");

//*******Abstraction

function Circles2(radius2) {
  this.radius2 = radius2;
  this.draw = function () {
    console.log("draw");
  };
}

const circles2 = new Circles2(10);
