 
// ascending and discending for string
const arr3 = ['21', '2100', '2', '35000'];
const arr4 = ['21', '2100', '2', '35000'];

let ascS = arr3.sort((f, s) => f.length - s.length);
let dscS = arr4.sort((f, s) => s.length - f.length);

console.log(arr3);
console.log(arr4);