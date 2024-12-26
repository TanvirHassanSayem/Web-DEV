const fil=[3,4,67,89,30,45,67]

console.log(fil.filter( p => p%2 === 0 ))

const array2=['Sayem','Nabil','Nobo',"Brinto",'Polash']

console.log(array2.find( p => p.includes('i')))
console.log(array2.filter( p => p.includes('i')))

array2.forEach(p => console.log(p.toLowerCase()));



console.log(fil.reduce( (c,p)=> c+p,0))



