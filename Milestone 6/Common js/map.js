const array1=[2,4,66,77,34,55];
const array2=['Say em','Nabil','Sayem','Nobo','Si fat',"Brinto",'Polash']

const a= array1.map( x=> x+x+23);
const a1= array2.map( x=> x.length);
const a2= array2.map( x=> x[2]);
const a3= array2.map(x => x.split(' ') );

console.log(array2[4].split(' ').join(' '))


console.log(a) // Mapping in the Array and Pass the element through function//
console.log(a1) // Mapping in the Array and Pass the element through function//
console.log(a2) // Mapping in the Array and Pass the element through function//
console.log(a3) // Mapping in the Array and Pass the element through function//



