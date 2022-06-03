// const myArray = []
// for (let i = 0; i < 100; i++) {
//   myArray.push(i)
// }
// console.log(myArray)

 
function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }
  var result = range(0, 50); 
  console.log(result);  