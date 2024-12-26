const products=[
    { name:"laptop", price:5000,brand:"hp" ,color:"green"},
    { name:"phone", price:2000,brand:"dp" ,color:"violet"},
    { name:"watch", price:1000,brand:"cp" ,color:"yellow"},
    { name:"Sunglass", price:500,brand:"ep" ,color:"orange"},
    { name:"camera", price:3000,brand:"ap" ,color:"blue"},
]
// const brands = products.map(x=>{ return x.brand})
// console.log(brands)
// products.forEach( x=> console.log(x.name))
// const filteredProducts = products.filter(x=> x.price<=1000)
// console.log(filteredProducts)
const sortedProducts = products.sort((a,b)=> a.price-b.price)
console.log(sortedProducts)
const filteredProducts1 = products.filter(x=> x.name.includes("l"))
console.log(filteredProducts1)
const filteredProducts2 = products.find(x=> x.name.includes("a"))
console.log(filteredProducts2)


