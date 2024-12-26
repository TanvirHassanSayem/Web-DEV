// function stopwatch() {
//     let counter = 0;
//     return function () {
//         counter++;
//         return counter;
//     }
// }


// const w1 = stopwatch();

// w1();
// w1();
// w1();
// w1();
// w1();


function a1(){
    let x=0;
    return function sum(){
        const y=x++;
        return y;
    }
}

const w1= a1()



console.log(w1());
console.log(w1());
console.log(w1());
console.log(w1());

