const object = {

    data: [
        {
            id: 1,
            Name: "Hit",
            Price: 70,
            json: {
                work: 2,
                Current: true,
                bad: {
                    Know: true,
                    Unknow: false,
                    "Good?": {
                        Value: 300,
                        Price: 200,
                        Available: true

                    }
                }
            }
        },
        {
            id: 2,
            Name: "Hitman",
            Price: 99
        },
        {
            id: 3,
            Name: "Hardik",
            Price: 7000
        },
        {
            id: 4,
            Name: "Keyboard",
            Price: 990
        },
        {
            id: 5,
            Name: "Mouse",
            Price: 702
        },
        {
            id: 6,
            Name: "Hitman3",
            Price: 100
        },
        {
            id: 7,
            Name: "Fortnite",
            Price: 40
        },
        {
            id: 8,
            Name: "Hitman_Absolution",
            Price: 22
        }


    ]


}

console.log(object.data[4].Name)
console.log(object.data[0].json.bad["Good?"].Available)
console.log(object)
