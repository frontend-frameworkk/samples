let selectedColors = ["red", "green"];
console.log(selectedColors);

selectedColors[2] = "pink";

console.log(selectedColors);

console.log(selectedColors.length);

console.log(selectedColors[0] + selectedColors[1] + selectedColors[2]);

/*
(2) ["red", "green"]
ArrayExample.js:6 (3) ["red", "green", "pink"]
ArrayExample.js:8 3
ArrayExample.js:10 redgreenpink
typeof selectedColors  //type of array is an object
"object"

*/
