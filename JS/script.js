
const navigation = document.getElementById("nav1");
let main = document.getElementById("main");
let upco = document.getElementById("upco");
console.log(upco)

let all = []

async function mainEvent() {
    let reponse = await fetch("JSON/dates.json");
    let event = await reponse.json();
    event.forEach(element => {
        if (element.Day > dateUTC) {
            all.push(element);
        }
    })

    console.log(all)
    main.innerText = all[0].Name;
    upco.innerText = all[1].Name;


}

mainEvent();


const menu = document.getElementById("clk");

display = menu.addEventListener("click", () => {
    if (navigation.classList.contains("max-md:hidden")) {
        navigation.classList.remove("max-md:hidden");
    } else {
        navigation.classList.add("max-md:hidden")
    }
});

const comm = document.getElementById("btn1")
const commu = document.getElementById("commu");

 dis = commu.addEventListener("click", () => {
    if (comm.classList.contains("hidden")) {
        comm.classList.remove("hidden");
    } else {
        comm.classList.add("hidden")
    }
});



let date = Date.now();
console.log(date);

let date1 = new Date();
dateUTC = date1.toISOString();
console.log(dateUTC)

let year = date1.getUTCFullYear();
let mois = date1.getUTCMonth();
let jour = date1.getUTCDay();





