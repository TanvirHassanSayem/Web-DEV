class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    Call(){
        console.log(`This is ${this.name}`)
    }
    work(){
        this.Call();
    }
}


const p1 = new person("Sayem",24);

console.log(p1)

p1.Call()