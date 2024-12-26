const father="Sayem"

let season = "winter";
if(father === "Sayem" || season === "winter"){
    console.log("I am Sayem's son")
}else{
    console.log("I am not Sayem's son")
}

const getFityFive= () => {
    return 55;
}

const getSixtyFive = num => num + 10;

const isEven = x=> x%2 === 0;

const addThree= (x,y,z) => {
    return x+y+z;
}

const doMath =()=> {
    const sum = addThree(3,4,5);
    return sum;
}

let numbers=[2,3,4,5,6,7,8,9];

let numbers1=[...numbers]

numbers.push(1);
numbers.push(10);
console.log(numbers);
console.log(numbers1);


