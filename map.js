const numbers = [4, 9, 16, 25,15,45,48,38];
const newarr = numbers.map(Math.sqrt);
 console.log(newarr);

 function demo(age){
     return age<=18;
 }
 const std = numbers.map(demo)
 console.log(std);