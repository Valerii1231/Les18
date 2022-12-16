"use strict";

var firstSalary = +prompt("Enter first moonth salary");
var secondSalary = +prompt("Enter second moonth salary");
var totalSalary = firstSalary + secondSalary;
alert("Your selary for 2 moonths was: ".concat(totalSalary, "$."));
var bonusSalary = totalSalary + 1;
alert("Yoy have extra bonus Your selary for 2 moonths is ".concat(totalSalary, "$.  It's increase 1$ and now it is: ").concat(bonusSalary, "$ "));
var minSalary = 2000;

if (bonusSalary >= minSalary) {
  alert('Will you work next? true');
} else {
  alert('Will you work next? false');
}

;
bonusSalary >= minSalary ? alert('I\'m ready to work') : alert('I\'m out');