let firstSalary = +prompt ("Enter first moonth salary");
let secondSalary = +prompt ("Enter second moonth salary");
let totalSalary = firstSalary + secondSalary;
alert (`Your selary for 2 moonths was: ${totalSalary}$.`);
let bonusSalary = totalSalary +1;
alert ( `Yoy have extra bonus Your selary for 2 moonths is ${totalSalary}$.  It's increase 1$ and now it is: ${bonusSalary}$ `);
const minSalary = 2000;
if (bonusSalary >= minSalary) {
    alert ('Will you work next? true');}
   else {
   alert ('Will you work next? false');
};
bonusSalary >= minSalary ?  alert ('I\'m ready to work') : alert ('I\'m out' );