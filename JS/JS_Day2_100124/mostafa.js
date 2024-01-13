//EX:2.2

// var word = prompt("Enter the word:");
// var wordReverse = word.split("").reverse().join("");
// var cond = prompt("Do you need it case senstive? y/n");
// if (cond === "y") {
//   if (word == wordReverse) {
//     alert("The word is palindrome");
//   } else {
//     alert("The word is not palindrome");
//   }
// } else {
//   word = word.toUpperCase();
//   wordReverse = wordReverse.toLocaleUpperCase();
//   if (word === wordReverse) {
//     alert("The word is palindrome");
//   } else {
//     alert("The word is not palindrome");
//   }
// }

//-----------------------------------------------------------------------

// EX3.2

// function(a, b){return a-b}
/*
var arr = [];
for (var i = 0; i < 5; i++) {
  var inputValues = Number(prompt("Enter the values you want to sort:"));
  arr.push(inputValues);
  arr.sort(function (a, b) {
    return a - b;
  });
}
console.log(arr);
*/

//---------------------------------------------------------------------

//EX3.1

var arr = [];
var sum = 0;
var multiple = 1;

for (var i = 0; i < 3; i++) {
  var inputValues = Number(prompt("Enter the number:"));
  arr.push(inputValues);
  sum += inputValues;
  multiple *= inputValues;
}

document.writeln(
  "Sum of 3 values ",
  arr[0],
  "+",
  arr[1],
  "+",
  arr[2],
  "=",
  sum,
  "<br>"
);

document.writeln(
  "Multiple of 3 values ",
  arr[0],
  "*",
  arr[1],
  "*",
  arr[2],
  "=",
  multiple,
  "<br>"
);
divison2 = arr[0] / arr[1] / arr[2];
document.writeln(
  "Multiple of 3 values ",
  arr[0],
  "/",
  arr[1],
  "/",
  arr[2],
  "=",
  divison2,
  "<br>"
);
console.log(arr);
