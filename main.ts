// * normal function
function log(message) {
  console.log(message);
}

var message = "hello world";
log(message);

//* let and var
var num = 1; //es5
let count = 1; // es6

function dosomethingwithvar() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log("final value" + i);
}

dosomethingwithvar();

/*
function dosomethingwithlet() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log("final value" + i); // it gives error Cannot find name 'i'. 25   console.log("final value" + i); // it gives error
}

dosomethingwithlet();

*/

/*
//* let once assiged to number cannot assign the varaible type but its possible in javascript
let countNumType = 2;
countNumType = "lakshmi"; //main.ts:33:1 - error TS2322: Type '"lakshmi"' is not assignable to type 'number'.

33 countNumType = "lakshmi";
~~~~~~~~~~~~

var countNumType = 2;  // it is valid
countNumType = "lakshmi";
*/

//let a: number;
// let booleanType: boolean;
// let stringType: string;
// let anyType: any;
// let arrayType: number[] = [0, 1, 2]; //group of similar datatypes
// let anyArray: any[] = [0, true, "lakshmi"]; //any can carry any datatype values

// const constType = "lakshmi";

// enum color { // enum color{red,green}
//   red = 0,
//   green = 1,
// } //enum is group of related consts in a container

// let background = color.red;

//*asserations
let assertionsExample = "assertions";
//let valueEndsWithS = assertionsExample.endsWith("s");
//console.log(valueEndsWithS); //true

let assertionsExample2; //type is any , if you hover and check it shows any
assertionsExample2 = "Apple"; //if you assign the string later also it take type as any
//let valueEndWithE = (<string>assertionsExample2).endsWith("E"); //as type is any you will not get intellisense , so you need to append string assertions to get intellisense

//let alternateway = (assertionsExample2 as string).endsWith("E");

//*Arrow functions

function normalFunction(normalFunctionparameters) {
  console.log(normalFunctionparameters);
}
normalFunction("normal functions");

let arrayFunction = (arrowFunctionParameters) =>
  console.log(arrowFunctionParameters);

arrayFunction("arrow Functions"); //arrow functions in typescript similar to lamda expresiions in c#

//*custom types

/*
let drawPoint = (x,y) => {  //1.few parameters
  console.log();
}
drawpoint(1,2);

let drawPoint = (x,y,a,b,c) => { // 2.too many parameters
console.log();
}
drawpoint(1,2,3,4,5);

let drawPoint =(point) = > { //3.if you have lot of parameters , you can pass an object
console.log();
}
drawPoint({x:0,y:1}) 

let drawPoint =(point)=>{
console.log();
}
drawPoint({
  name:laskhmi  //to avoid passing wrong datatype parmeters instead of x and y to draw a picture, if we pass name , it will throw runtime error
})

let drawPoint =(point{x:number,y:number})=>{  //in-line annotation , it is literal object , if you want to pass object point literal you can use interface , to reuse passsing different object

}
drawPoint({x:0,y:1})
*/

/*
interface Point {
  //we are using interface to define the shape of the point object
  //interface use naming convention with uppercase "P"
  x: number;
  y: number;
}

let drawPoint = (point: Point) => {
  //...
};

let getdistance =(pointA:Point,pointB,Point){
//...
}
drawPoint({
  x: 1,
  y: 2,
});

//we have the cohesion principle , things which are part of same object should be together 
//to avoid above problem we use class instead of interface
//interface doesnt implment methods, methods should be implement somewhere else
*/

/*
class Point {
  x: number;
  y: number;
  draw() {
    console.log("x values :" + this.x + "y value:" + this.y); //throws error as it has not created memory to intialise the object
  }
  getdistance() {
    //..
  }
}

let point: Point;
point.draw();

*/

/* class
class to bind all properties and methods together
name of the class should start with capital letter
*/
class Point {
  x: number;
  y: number;
  draw() {
    console.log("x values :" + this.x + "y value:" + this.y);
  }
}

let point = new Point(); //need to use new to create a memory
point.x = 1;
point.y = 2;
point.draw();

/*constructor
you can pass the properties inside the contructor
*/

class PointConstructor {
  private x1: number;
  y1: number;

  constructor(x1?: number, y1?: number) {
    //x1? is to declare x1 as optional parameter
    this.x1 = x1;
    this.y1 = y1;
  }
  draw() {
    console.log("x values :" + this.x1 + "y value:" + this.y1);
  }
}

let pointConstructor = new PointConstructor(1, 2);
/* private and public access modifiers 
we have 3 access modifiers
private
public 
protected
you can apply access modifiers to properties and methods
pointConstructor.x1=3, //x1 is private and accesible only within class
pointConstructor.y1=4; //y1 can be accesed as default it is public
*/
pointConstructor.draw();

/* brown access modifier 

*/

class PointBrown {
  constructor(private x2?: number, private y2?: number) {
    // this.x2 = x2;
    // this.y2 = y2; //not required as constructor will default intailaize it if you prefix properties with private or public
  }
  draw() {
    console.log("x2 values :" + this.x2 + "y2 value:" + this.y2);
  }
  // getX() {  // method to return a value
  //   return this.x2;
  // }
  // setX(value) {
  //   if (value < 0) {
  //     throw new Error("");
  //   }
  // }
  get xX() {
    //alternate way as decalring as a property instead of method
    //instead of methods to pass properties , we can use get and set to return and set the value
    //properties sould be camelcase - first letter small letter followed by uppercase
    return this.x2;
  }
  set xX(value) {
    if (value < 0) throw new Error("value cannot be less than 0");
    this.x2 = value;
  }
}

let pointBrown = new PointBrown(1, 2);
// let x2 = pointBrown.getX(); // as x2 is private we cant access it here , we need to use getX() which return x value
// pointBrown.setX(10);
let x2 = pointBrown.xX;
pointBrown.xX = 20;
pointBrown.draw();

/* modules
import { Point } from "./export";

let point = new Point(1, 2);
point.draw();

/* need to import the file within {name}  from 'path'
./ for same folder files
in order to avoid writing same logic in entire same main.ts we are distributing into different files
we can move to export.ts file and we can import this file in import.ts(main.ts) file
*/
