function loaddata3(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(res => res.json())
    .then(data => displayuser(data))
}

function displayuser(data){
    const ul = document.getElementById("user_list")
    for(let user of data){
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText=user.email;
        ul.appendChild(li);
    }

}