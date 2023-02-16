function submitform() {
  let unit = document.getElementById("units").value;
  let load = document.getElementById("load").value;
  let amt = 0;
  if (load == 5) {
    if (unit > 0 && unit <= 20) {
      //0-20
      amt = 30;
    } else if (unit >= 21 && unit <= 30) {
      //21-30
      amt = 50 + (unit - 20) * 6.5 + 20 * 3;
    } else if (unit >= 31 && unit <= 50) {
      //31-50
      amt = 50 + (unit - 30) * 8 + 20 * 3 + 65;
    } else if (unit >= 51 && unit <= 100) {
      //51-100
      amt = 75 + (unit - 50) * 9.5 + 20 * 3 + 65 + 20 * 8;
    } else if (unit >= 101 && unit <= 250) {
      //101-250
      amt = 100 + (unit - 100) * 9.5 + 20 * 3 + 65 + 20 * 8 + 50 * 9.5;
    } else if (unit > 250) {
      //250 above
      amt = 150 + (unit - 250) * 11 + 20 * 3 + 65 + 20 * 8 + 50 * 9.5 + 150 * 9.5;
    } else {
      alert("Error!");
    }
    alert(`The Electricity bill amount is ${amt}`); //  5 Ampere samma ko sakiyo*
  } else if (load == 15) {
    if (unit > 0 && unit <= 20) {
      //0-20
      amt = 50 + unit * 4;
    } else if (unit >= 21 && unit <= 30) {
      //21-30
      amt = 75 + (unit - 20) * 6.5 + 20 * 4;
    } else if (unit >= 31 && unit <= 50) {
      //31-50
      amt = 75 + (unit - 30) * 8 + 20 * 4 + 65;
    } else if (unit >= 51 && unit <= 100) {
      //51-100
      amt = 100 + (unit - 50) * 9.5 + 20 * 4 + 65 + 20 * 8;
    } else if (unit >= 101 && unit <= 250) {
      //101-250
      amt = 125 + (unit - 100) * 9.5 + 20 * 4 + 65 + 20 * 8 + 50 * 9.5;
    } else if (unit > 250) {
      //250 above
      amt = 175 + (unit - 250) * 11 + 20 * 4 + 65 + 20 * 8 + 50 * 9.5 + 150 * 9.5;
    } else {
      alert("Error!");
    }
    alert(`The Electricity bill amount is ${amt}`);
  } else if (load == 30) {
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
      amt = 950 + (unit - 100) * 9.5;
    } else if (unit > 250) {
      //250 above
      amt = 2425 + (unit - 250) * 11;
    } else {
      alert("Error!");
    }
    alert(`The Electricity bill amount is ${amt}`);
  } else if (load == 60) {
    if (unit > 0 && unit <= 20) {
      //0-20
      amt = 125 + unit * 6;
    } else if (unit >= 21 && unit <= 30) {
      //21-30
      amt = 125 + (unit - 20) * 6.5 + 20 * 6;
    } else if (unit >= 31 && unit <= 50) {
      //31-50
      amt = 125 + (unit - 30) * 8 + 20 * 6 + 65;
    } else if (unit >= 51 && unit <= 100) {
      //51-100
      amt = 150 + (unit - 50) * 9.5 + 20 * 6 + 65 + 20 * 8;
    } else if (unit >= 101 && unit <= 250) {
      //101-250
      amt = 200 + (unit - 100) * 9.5 + 20 * 6 + 65 + 20 * 8 + 50 * 9.5;
    } else if (unit > 250) {
      //250 above
      amt = 250 + (unit - 250) * 11 + 20 * 6 + 65 + 20 * 8 + 50 * 9.5 + 150 * 9.5;
    } else {
      alert("Error!");
    }
    alert(`The Electricity bill amount is ${amt}`);
  }
}
