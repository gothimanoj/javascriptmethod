//  Rest op.

// function addnum(a,b,c,...other) {
//     console.log(other);
//     return a+b+c;
//     }
//     const res = addnum(2,5,8,9,78,45)
//     console.log(res);

    // spread op.

    // const name =["google","facebook","meta","insta","pytem"]

    // function getnames(name1,name2,name3,name4,name5){
    //     console.log(name1,name2,name3,name4,name5);
    // }
    // getnames(name[0],name[1],name[2],name[3],name[4])
    // getnames(...name) //rest op.
    // getnames(name)

    // obj ke sath REST
    // const student = {
    //     "name":"ajay",
    //     "age":"28",
    //     "hobby":["cricket","swiming","traveling"]
    // }
    // // const age = student.hobby;
    // // console.log(age);
    // const {...rest} = student;
    // console.log(rest);

    // obj ke sath Spread

        const student = {
        name:"ajay",
        age:"28",
        hobby:["cricket","swiming","traveling"]
    }
    const Newstudent ={
        ...student,
        age:"45",name:"ShreeRAM"
    }
    console.log(Newstudent);
