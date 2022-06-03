 var arr =  [ 1, 9, 3,"vgfhyf","kghjguk","njkgkjg",2 ]
//typeof(valut)!==typeof("vgfhyf");
console.log(arr)  
 
arr.splice(2,3)
console.log(arr) // prints 1, 3, 'abc', 'bbc'
// remove 3 elements from given index
arr.splice(3)
console.log(arr) // prints 1, 3
