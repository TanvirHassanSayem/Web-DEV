const url = 'https://jsonplaceholder.typicode.com/todos/1';
//For DOM

function loading(){
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}