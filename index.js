function submitform() {
  let unit = document.getElementById("units").value;
  let amt = 0;
  if (unit > 0 && unit <= 20) {
    //0-20
    amt = 75 + unit * 5;
  } else if (unit >= 21 && unit <= 30) {
    //21-30
    amt = 200 + (unit - 20) * 6.5;
  } else if (unit >= 31 && unit <= 50) {
    //31-50
    amt = 265 + (unit - 30) * 8;
  } else if (unit >= 51 && unit <= 100) {
    //51-100
    amt = 450 + (unit - 50) * 9.5;
  } else if (unit >= 101 && unit <= 250) {
    //101-250
    amt = 950 + (unit - 100) * 11;
  } else if (unit > 250) {
    //250 above
    amt = 2425 + (unit - 250) * 11;
  } else {
    alert("Error!");
  }
  alert(`The Electricity bill amount is ${amt}`);
}
