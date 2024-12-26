const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(error => console.log(error))
}
const displayCategories = (data) => {
    const categoryContainer = document.getElementById("categories")  
    data.forEach(x => {
        console.log(x)
        const ButtonContainer = document.createElement("div")
        ButtonContainer.innerHTML=`
        <button id="btn-${x.category_id}"
         class="btn category-btn " 
         onclick="loadCategoriesVideos(${x.category_id}) 
         ">${x.category}</button>             `
        categoryContainer.append(ButtonContainer);
    });
}
const removeActiveClass = () => {
    const removeBtn = document.getElementsByClassName("category-btn");
    console.log(removeBtn);
    for (let i = 0; i < removeBtn.length; i++) {
        removeBtn[i].classList.remove("active");
    }




}
const loadCategoriesVideos = (a) => {
 alert(`Loading categories  from Server ${a}`);
 fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${a}`)
        .then(res => res.json())
        .then(data => {
            removeActiveClass();
            const activeBtn = document.getElementById(`btn-${a}`)
            displayVideos(data.category)
            console.log(activeBtn)
            activeBtn.classList.add("active")
        })
        .catch(error => console.log(error))
}
const loadVideos = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
        .catch(error => console.log(error))
}
function getTime(time){
    let hours = parseInt(time / 3600);
    let remainingTime =time % 3600;
    let minutes = parseInt(remainingTime / 60);
     remainingTime = remainingTime % 60;
     return `${hours} hr ${minutes} min ${remainingTime} sec ago`
   }
const displayVideos = (data) => {
    const VideoContainer = document.getElementById("videos")
    VideoContainer.innerHTML = "";  
    if (data.length==0) {
        VideoContainer.classList.remove("grid");
        VideoContainer.innerHTML = 
        `<div  class=" h-[300px] left-80 w-full flex flex-col gap-4  justify-center items-center ">
         <img src="assets/Icon.png"  />
         <h2 class=" text-center font-bold text-xl ">No more Content here</h2>
        </div)`
        return;
    }    
    data.forEach(y => {
        console.log(y)
        const card = document.createElement('div')
        card.classList = "card card-compact bg-base-100  "
        card.innerHTML = `
           <figure class = " h-[200px] relative ">
            <img
                src= ${y.thumbnail}
                class=" w-full h-full object-cover "
                alt="Shoes" />
                ${y.others.posted_date?.length ==  0 ? "" 
                    : ` <span class = "absolute text-white right-2 text-xs
                     bottom-2 bg-black">
                      ${getTime(y.others.posted_date)} 
                      </span>` 
                    }             </span>   
           </figure>
    <div class="px-0 py-1 flex gap-2">
    <div>
    <img class="w-10 h-10 rounded-full object-cover" src=${y.authors[0].profile_picture}  />
    </div>
    <div>
    <h2 class=" font-bold"> ${y.title} </h2>
    <div class=" flex  items-center gap-2">
    <p>${y.authors[0].profile_name}</p>
    ${y.authors[0].verified == true ?
        `<img class= " w-4 h-4 rounded-full object-cover" src="https://img.icons8.com/?size=100&id=6xO3fnY41hu2&format=png&color=000000" /> `
         : ""}   
    </div>
    <p>
    <button 
    onclick="loadVideoDetails('${y.video_id}')" 
    class="btn btn-sm btn-secondary" 
    >
    Details
    </button>
    </p>
    </div>
  </div> `;
 VideoContainer.append(card);

});
}
const loadVideoDetails = async(vid)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phero-tube/video/${vid}`);
    const data = await res.json();
    DisplayDetails(data.video);
}


const DisplayDetails=(v) =>{
   const detailsContainer = document.getElementById("modal-content")
   document.getElementById("my_modal_1").showModal();
   detailsContainer.innerHTML = `
    <div class="w-full h-full flex justify-center items-center ">
    <img class="w-full h-full object-cover" src=${v.thumbnail}  />
    </div>
    <p>  ${v.description} </p>
    `
}
loadCategories();
loadVideos();