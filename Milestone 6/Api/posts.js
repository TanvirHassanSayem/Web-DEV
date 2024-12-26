function loadpost(){  
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(res => res.json())
        .then(data => displayPosts(data))   
}
function displayPosts(data){
    const post_container= document.getElementById("post_container");
    for(let post of data){
        console.log(post);
        const div =document.createElement('div');
        div.innerHTML=`
        <h3> TITLE- ${post.title}</h3>
        <h4> User ID - ${post.id}</h4>     
        <p> Body- ${post.body}</p>       `
        post_container.appendChild(div)
    }
}
loadpost();
function deletePost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
      });
      console.log("Delete Done !!")
}

function patchPost(){

    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
          title: 'foo',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
        console.log("Patch Done !!")
}


function createPost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));

        console.log("Creation Done !!")
}

  
