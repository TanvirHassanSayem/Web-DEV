
//For DOM
function loaddata1(){
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}
function loaddata2(){
    const url = 'https://jsonplaceholder.typicode.com/photos';
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}