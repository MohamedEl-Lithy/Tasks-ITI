// Task 1.2 -- Sum until 100 or press zero
//---------------------------------------------

function functionTask1() {

    var result = 0;
    do {
      var num = Number(prompt("Enter Number: "));
      result += num;
    } while (result <= 100 && num != 0);
    document.getElementById("result").innerHTML =  "The sum is: " + result;
  }


// Task 2.1 -- search how many times a letter appear
//---------------------------------------------

function functionTask2() {

var count = 0;
var str = prompt("Enter your name:");
var search = prompt("Enter letter you want to count");

for (var i = 0; i < str.length; i++) {
  if (str[i] == search) count++;
}
//window.alert(count);
// document.writeln(count)  //this get the result in new blank page 
document.getElementById("resultTask2").innerHTML = "The counter is: " + count ;
}
// Task 3 -- 
//---------------------------------------------
function functionTask3() {
do {
  var username = prompt("Enter your name:");
} while (!isNaN(username)); // cancel question

do {
  var phoneNumber = prompt("Enter your phone number:");
} while (phoneNumber.length != 8);

do {
    var mobileNumberRegularExpression = /(010|012|011|015)\d{8}/g;
    // g = global and i = upper and lower case 
  var mobileNumber = prompt("Enter your Mobile number:");
} while (!mobileNumber.match(mobileNumberRegularExpression));


do {
    //var mailRegularExpression = /\w+@\w+.\w+/gi;
var mailRegularExpression = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var mail = prompt("Enter valid E-mail:");
} while (!mail.match(mailRegularExpression));

var color = prompt("Please choose color:'Red,green,blue'").toLowerCase();

document.writeln("<h1 style='color:" + color + ";'>Entering client data</h1>");
document.writeln(
  "<p style='color:" + color + ";'>Welcome dear guest" + name + " " + "</p>"
);
document.writeln("your telephone number is ", phoneNumber, "<br>");
document.writeln("your mobile number is ", mobileNumber, "<br>");
document.writeln("your email address is ", mail, "<br>");
}
//------------------------------------------------------------
