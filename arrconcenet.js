const arr = [1, 2, 3, 5, 10, 9, 8, 9, 10, 11, 7];
// let temp;
// for (let i = 0; i < arr.length; i++) {
//     for(let j = 0; j<arr.length;j++)
//     if(arr[i]<arr[j]){
//         temp = arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
//     }
// }
const lowestToHighest =arr.sort((a,b)=>a-b)
console.log(arr);
const HighestToLowest =arr.sort((a,b)=>b-a)
console.log(arr);