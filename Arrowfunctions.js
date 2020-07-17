console.log("Arrow functions");

function normalFunctWithoutParameters() {
  console.log("normal function without parameters");
}
normalFunctWithoutParameters();

let arrowFunctWithoutParameters = () => {
  console.log("arrow function without parameters");
};
arrowFunctWithoutParameters();

const feature = null; // it is throwing error if you intialize const
function normalFunctWithParameters(feature) {
  console.log(feature + "normal function with parameters");
}
normalFunctWithParameters("ES5");

let feature1;
let arrowFunctWithParameters = (feature1) => {
  console.log(feature1 + "arrow function with parameters");
};
arrowFunctWithParameters("ES6");

// Normal functions are replaced with Arrow functions in ES6 .
// they use fat arrow symbol (=>)
// makes code more simplier
