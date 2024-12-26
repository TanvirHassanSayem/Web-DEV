const addlocalStorage =() => {
    const idInput =document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput =document.getElementById('storage-value');
    const value = valueInput.value;

    if(id && value){
        localStorage.setItem(id, value);
    alert(`Stored "${value}" with id "${id}"`);
    }
    idInput.value = '';
    valueInput.value = '';
}


const pen={
    price: 20,
    color: 'blue'
}
// Store the object in localStorage
localStorage.setItem("pen", JSON.stringify(pen));

// Retrieve and parse the object from localStorage
const retrievedPen = JSON.parse(localStorage.getItem("pen"));
console.log(retrievedPen); // { price: 20, color: "blue" }
