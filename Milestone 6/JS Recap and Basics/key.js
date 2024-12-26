const object={

    name:"Sayem",
    position:"DEV",
    Age:24

}

// Object.seal(object)
// Object.freeze(object)



//  delete object.Age;

const {Age,...object1}=object           //Delete with a new object creation//

console.log(Age,object1)



console.log(Object.entries(object))
console.log(Object.keys(object))
console.log(Object.values(object))
console.log(Object.isSealed(object))
console.log(Object.isFrozen(object))