function sum(a,b,c){
    console.log(arguments);
    return a+b+c;


}

const ar= sum(2,33,44,5,6,6,7,4,4);

console.log(`The Result is : ${ar}`);

console.log(sum.length);
