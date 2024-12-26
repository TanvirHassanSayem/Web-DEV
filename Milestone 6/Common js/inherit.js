class vehicle{
    constructor(name,price){
        this.name=name;
        this.price=price
    }
    move(){
        console.log("Gari is Going ONNNNNNNN");
    }
}

class Bus extends vehicle{
    constructor(name,price,seat){
        super(name,price)
        this.seat=seat;
    }
}

class Truck extends vehicle{
    constructor(name,price,load){
        super(name,price)
        this.load=load;
    }

}

