// * normal function
function log(message) {
  console.log(message);
}
var message = "hello world";
log(message);
//* let and var
var num = 1; //es5
var count = 1; // es6
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
var assertionsExample = "assertions";
//let valueEndsWithS = assertionsExample.endsWith("s");
//console.log(valueEndsWithS); //true
var assertionsExample2; //type is any , if you hover and check it shows any
assertionsExample2 = "Apple"; //if you assign the string later also it take type as any
//let valueEndWithE = (<string>assertionsExample2).endsWith("E"); //as type is any you will not get intellisense , so you need to append string assertions to get intellisense
//let alternateway = (assertionsExample2 as string).endsWith("E");
//*Arrow functions
function normalFunction(normalFunctionparameters) {
  console.log(normalFunctionparameters);
}
normalFunction("normal functions");
var arrayFunction = function (arrowFunctionParameters) {
  return console.log(arrowFunctionParameters);
};
arrayFunction("arrow Functions"); //arrow functions in typescript similar to lamda expresiions in c#
//*custom types
/*
let drawPoint = (x,y) => {  //1.few parameters
  console.log();
}

let drawPoint = (x,y,a,b,c) => { // 2.too many parameters

}

let drawPoint =(point) = > { //3.passing object if you have lot of parameters

}
drawPoint({x:0,y:1})

let drawPoint =(point)=>{

}
drawPoint({
  name:laskhmi  //to avoid passing wrong datatype parmeters
})

let drawPoint =(point{x:number,y:number})=>{  //in-line annotation , it is literal object , if you want to object point literal you can use interface

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
var Point = /** @class */ (function () {
  function Point() {}
  Point.prototype.draw = function () {
    console.log("x values :" + this.x1 + "y value:" + this.y1); //throws error as it has not created memory to intialise the object
  };
  Point.prototype.getdistance = function () {
    //..
  };
  return Point;
})();
var point = new Point();
point.x1 = 1;
point.y1 = 2;
point.draw();
