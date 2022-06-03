const { log } = require("console");

const ages = [32, 33, 16, 40,10];

 ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
const serch = ages.filter(checkAdult);
console.log(serch);

 const arr=[12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
 const sb = arr.filter(age=>age>=18)
 console.log(sb);