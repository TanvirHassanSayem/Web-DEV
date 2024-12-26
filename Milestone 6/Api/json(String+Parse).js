const ob={
    id:2,
    name:"Siam",
    Adress:"Airport"
}
console.log(ob)
const  json1= JSON.stringify(ob)
console.log(json1)
const shop={
    owner:"Robi",
    Adress:{
        Street:"A1",
        City:"Dhaka",
        country:"BD"
    },
    product:[2,3,4,5,53,3],
    isOpen: true,
    isNew:false
}
console.log(shop)
const  json_Shop= JSON.stringify(shop)
console.log(json_Shop)
const  json_Shop1= JSON.parse(json_Shop)
console.log(json_Shop1)
const  json_Shop2= JSON.stringify(json_Shop1)
console.log(json_Shop2)