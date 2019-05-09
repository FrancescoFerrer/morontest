var scene = [
    //scene level 1 object
    {
        //array for instructions of scene
        instructions: ["Which light means stop?"],
        //array of icon properties objects
        icons: [{
                class: "fas fa-traffic-light",
                color: "#FC0D1B",
                content: null,
                size: null,
                transform: null,
                left: 25,
                top: 50,
            },
            {
                class: "fas fa-traffic-light",
                color: "#e8f800",
                content: null,
                size: null,
                transform: null,
                left: 50,
                top: 50,
            },
            {
                class: "fas fa-traffic-light",
                color: "#1eff00",
                content: null,
                size: null,
                transform: null,
                left: 75,
                top: 50,
            },
        ],
        //answer sequence array
        //ordered number values are the icon index values
        //to be clicked in sequence
        answer: [0],
        //scene specific logic
        main: function (icon, i) {},
    },
    //scene level 2 object
    {
        //array for instructions of scene
        instructions: ["Touch the pie to continue."],
        //array of icon properties objects
        icons: [{
                class: "text-icon",
                color: "#000",
                content: 3.14,
                size: 5,
                transform: null,
                left: 20,
                top: 50,
            },
            {
                class: "text-icon",
                color: "#000",
                content: 3.16,
                size: 5,
                transform: null,
                left: 40,
                top: 50,
            },
            {
                class: "text-icon",
                color: "#000",
                content: 4.13,
                size: 5,
                transform: null,
                left: 60,
                top: 50,
            },
            {
                class: "fas fa-chart-pie",
                color: "#FDB95A",
                content: null,
                size: 5,
                transform: null,
                left: 80,
                top: 50,
            },
        ],
        //answer sequence array
        //ordered number values are the icon index values
        //to be clicked in sequence
        answer: [3],
        //scene specific logic
        main: function (icon, i) {},
    },
    //scene level 3 object
    {
        //array for instructions of scene
        instructions: ["From smallest to biggest, press the numbers based on their size.", " "],
        //array of icon properties objects
        icons: [{
                class: "text-icon",
                color: "#000",
                content: 2,
                size: 3,
                transform: null,
                left: 35,
                top: 20,
            },
            {
                class: "text-icon",
                color: "#000",
                content: 37,
                size: 7,
                transform: null,
                left: 70,
                top: 80,
            },
            {
                class: "text-icon",
                color: "#000",
                content: 15,
                size: 13,
                transform: null,
                left: 50,
                top: 50,
            },
            {
                class: "text-icon",
                color: "#000",
                content: 14,
                size: 18,
                transform: null,
                left: 20,
                top: 70,
            },
            {
                class: "text-icon",
                color: "#000",
                content: 23,
                size: 22,
                transform: null,
                left: 75,
                top: 35,
            },
        ],
        //answer sequence array
        //ordered number values are the icon index values
        //to be clicked in sequence
        answer: [0,1,2,3,4],
        //scene specific logic
        main: function (icon, i) {
            switch(clickCount){
                case 1:
                changeInstr(" ")
                icons[0].classList.add("hidden")
                moveIcon(1, 75, 35)
                moveIcon(2, 50, 50)
                moveIcon(3, 70, 80)
                moveIcon(4, 20, 70)
                break
                case 2:
                icons[0].classList.add("hidden")
                icons[1].classList.add("hidden")
                moveIcon(2, 50, 85)
                moveIcon(3, 55, 30)
                moveIcon(4, 85, 30)
                break
                case 3:
                icons[0].classList.add("hidden")
                icons[1].classList.add("hidden")
                icons[2].classList.add("hidden")
                moveIcon(3, 20, 70)
                moveIcon(4, 70, 80)
                break
                case 4:
                icons[0].classList.add("hidden")
                icons[1].classList.add("hidden")
                icons[2].classList.add("hidden")
                icons[3].classList.add("hidden")
                moveIcon(4, 15, 65)
                break

            }
        },
    },
]
