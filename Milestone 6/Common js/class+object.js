const  info = [

      { id: 1, Name: 'Hit', Price: 70, json: [Object] },
      { id: 2, Name: 'Hitman', Price: 99 },
      { id: 3, Name: 'Hardik', Price: 7000 },
      { id: 4, Name: 'Keyboard', Price: 990 },
      { id: 5, Name: 'Mouse', Price: 702 },
      { id: 6, Name: 'Hitman3', Price: 100 },
      { id: 7, Name: 'Fortnite', Price: 40 },
      { id: 8, Name: 'Hitman_Absolution', Price: 22 }

]


class product{

    Name="BanglaDesh";
    Age=53;
    spank(x){
        console.log(`Spank${x}.com`)
    }
    constructor(Sirname,Subject){
        this.Sirname=Sirname;
        this.Subject=Subject;

    }
}


const p1 = new product();

console.log(p1)

p1.spank('Bang')

const teacher1= new product('Sahjahan_Tapan','Physics')      //Using COnstructor//

console.log(teacher1)