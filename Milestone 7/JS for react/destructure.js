const numbers=[23,24]
const [num1,num2]=numbers;
console.log(num1,num2);
function boxify(num1,num2) {
    const nums=[num1,num2];
    return nums;}
const box=boxify(34,12);
console.log(box);
const student={
    name:'Sakib',
    age:24,
    movies:['King Khan','Dhakar Mastan']
}

const [firstMovie,secondMovie]=student.movies;

// Object Destructure

const {name,age}=student;
console.log(name,age);

const employee={
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages:['html','css','js'],
    specification:{
        height:66,
        weight:60,
        address:'kumarkhali',
        drink:'water',
    },
    watch:{
        color:'black',
        price:500,
        brand:'garmin'
    }
}

const{machine,ide}=employee;

const {brand}=employee.watch;
console.log(brand);

