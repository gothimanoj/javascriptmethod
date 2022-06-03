// every() function :
// every() function is used to check whether a condition is fulfilled by all the elements or not. every() function returns true if the condition is satisfied by all the elements of the array otherwise every method will return false.

arr = [1,3,7,11,13,12];
arr1 = [1,3,6,4,8];
function odd(value){
    if( (value % 2) == 1){
        return true;
    }else{
        return false;
    }
}

var out = arr.every(odd);
var out1 = arr1.every(odd);
console.log("Output of array 1 : " + out);
console.log("Output of array 2 :" + out1);
