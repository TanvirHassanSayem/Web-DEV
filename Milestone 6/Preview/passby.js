let num1= 23;
let num2= 43;

function sum(a,b){
    a=40;
    return (a+b);
}
//Pass by Value//
console.log(num1);

const res= sum(num1,num2);

console.log(num1);


//Pass by reference//

const stu1= {
    id:1,
    name:"Kasem"
}
const stu2= {
    id:3,
    name:"Hasem"
}

function comp(k,h){
     k.id=2,
     h.name="Sayem"
}

console.log(stu1,stu2);

comp(stu1,stu2);

console.log(stu1,stu2);

