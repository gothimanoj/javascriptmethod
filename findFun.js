 
arr = [2,4,6,8,10,11,11,13];
 
function odd(value){
    if( (value % 2) == 1){
        return true;
    }else{
        return false;
    }
}

const out = arr.find(odd);
 
console.log( out);
 

