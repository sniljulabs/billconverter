let unit = Number(prompt("Enter the Units:"));
let amt = 0;
if (unit > 0 && unit <= 20) {
  amt = 75 + unit * 5;
} else if (unit >= 21 && unit <= 30) {
  amt = 200 + (unit - 20) * 7;
} else if (unit >= 31 && unit <= 50) {
  amt = 295 + (unit - 30) * 8.5;
} else if (unit >= 51 && unit <= 150) {
  amt = 490 + (unit - 50) * 10;
} else if (unit >= 151 && unit <= 250) {
  amt = 1515 + (unit - 150) * 11;
} else if (unit >= 251 && unit <= 400) {
  amt = 2640 + (unit - 250) * 12;
} else if (unit > 400) {
  amt = 4465 + (unit - 400) * 13;
} else {
  alert("Error!");
}
alert(`The Electricity bill amount is ${amt}`);
