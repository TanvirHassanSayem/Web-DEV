// const student={
//     name:'Sakib khan',
//     age:32,
//     movies:['king khan','Dhakar Mastan']
// }

// const studentJSON= JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

// const parseStudent= JSON.parse(studentJSON);
// console.log(parseStudent);

// fetch("url")
// .then(res=>res.json())
// .then(data=>console.log(data));

// const products=[
//     { name:"laptop", price:5000,brand:"hp" ,color:"green"},
//     { name:"phone", price:2000,brand:"dp" ,color:"violet"},
//     { name:"watch", price:1000,brand:"cp" ,color:"yellow"},
//     { name:"Sunglass", price:500,brand:"ep" ,color:"orange"},
//     { name:"camera", price:3000,brand:"ap" ,color:"blue"},
// ]

// const newProducts= {name:"webcam", price:7000,brand:"hp" ,color:"green"};

// const newProducts1=[...products,newProducts];

// console.log(newProducts1);
// console.log(products);


// const remaining = products.filter(pd=> pd.name !== 'watch');
// console.log(remaining);



const typeSpeed= 43

const fastTyping= ()=>{console.log("fastTyping")};
const slowTyping= ()=>{console.log("slowTyping")};

typeSpeed>50 ? fastTyping("hello"): slowTyping("hello");