function x(){

    console.log('x')
    y();
    z();
    console.log("Loop End")
}


function y(){

    console.log("yy")
}

function z(){

    console.log("zzz")
}


setTimeout(()=>{
        console.log("Timeout")
     },3000)


     fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
x();

