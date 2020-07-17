console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world");

// to avoid the repetation of console like below , we can use for loop which repeats the no of action
for (let i = 0; i < 5; i++) {
  //for(let i=5 ; i>5;i--)
  console.log("hello world" + i);
}

//to display odd numbers
for (let oddNumbers = 1; oddNumbers <= 5; oddNumbers++) {
  if (oddNumbers % 2 != 0) console.log(oddNumbers);
}

//to display even numbers
for (let oddNumbers = 1; oddNumbers <= 5; oddNumbers++) {
  if (oddNumbers % 2 == 0) console.log(oddNumbers);
}
