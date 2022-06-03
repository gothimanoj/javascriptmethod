const company =[
    {name:"google",category:"product Based",start:1981,end:2004},
    {name:"facebook",category:"product Based",start:1900,end:2010},
    {name:"paytem",category:"product Based",start:1996,end:2015},
    {name:"meta",category:"Service Based",start:1915,end:2048},
    {name:"google",category:"public Based",start:1988,end:2020},
]
const ages=[33,12,20,16,5,54,44,85,12,13,87,96,32]

//for loop
// for(let i=0;i<=company.length;i++)
// {
//     console.log(company[i])
// }

//foreach
// company.forEach(function(company,index){
//     // console.log(company);
//     console.log(company.name);
//     console.log(index);
// })
// company.forEach((company,index)=>(console.log(company.name)))

//filter
// const age = ages.filter(function (age) {
//     if(age>=20){
//         return true;
//    }
// })
// console.log(age);

// const filterage = ages.filter(age=>age>=30)
// console.log(filterage);

// const sb = company.filter(function (csd) {
//     if(csd.category === "public Based"){
//         return true
//     }    
// })
// console.log(sb);

// const ab = company.filter(csd=>csd.start === 1900)
// console.log(ab);

// map
// const mp = company.map((csk,index)=>{
//     return `${csk.name} ${csk.start}`
// })
// console.log(mp);

// sort

// const str = company.sort(function (a1,a2) {
//     if(a1.start<a2.start){
//         return 1;
//     }
//     else{
//         return -1;
//     }
//     })
//     console.log(str);

//     const smalstr = company.sort(function (a1,a2) {
//         if(a1.start>a2.start){
//             return 1;
//         }
//         else{
//             return -1;
//         }
//         })
//         console.log(smalstr);

// const shrted = company.sort((c1,c2)=>(c1.end > c2.end ?1:-1))
// console.log(shrted);
// const sortage = ages.sort((a,b)=>(b-a));
// const sortage = ages.sort((a,b)=>(a-b));
// console.log(sortage);

// reduce

// let total = 0;
// for(let i=0;i<ages.length;i++){
//     total+=ages[i];
// }
// console.log(total);

// const sumage = ages.reduce(function(total,age){
//     return total+age
// },0)
// console.log(sumage);

const sumA = ages.reduce((total,age)=> total+age,0)
console.log(sumA);