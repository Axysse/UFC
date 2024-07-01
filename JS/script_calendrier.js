// let date = Date.now();
// console.log(date);

// let date1 = new Date();
// dateUTC = date1.toISOString();
// console.log(dateUTC)

// // let tout = [];

// async function mainEvent() {
//     let reponse = await fetch("JSON/dates.json");
//     let event = await reponse.json();
//     event.forEach(element => {
//         if (element.Day > dateUTC) {
//             tout.push(element);
//         }
//     })
//     console.log(tout);

// }

// let len = tout.Arraylength;
// let JPP = [];

// for (let i = 0; i < tout.length; i++) {
//     JPP.push({
//         tout[i].ShortName ,
//         tout[i].Day
//     });
// };
// console.log(JPP[0])

// mainEvent();


document.addEventListener('DOMContentLoaded', function () {
    let zbi = [];
    fetch("./JSON/dates.json")
        .then(res => res.json())
        .then(datas => {
            console.log(datas);
        
        for ( let j = 0; j < datas.length; j++) {
            zbi.push({ title: datas[j].ShortName, start: datas[j].Day, color: 'red', });
        }


            let calendarEl = document.getElementById('calendar');
            let calendar = new FullCalendar.Calendar(calendarEl, {
                initialView: 'dayGridMonth',
                events: zbi,
            })
            calendar.render();
            console.log(zbi);
        })

}
)








//     var calendarEl = document.getElementById('calendar');
//     var calendar = new FullCalendar.Calendar(calendarEl, {
//         initialView: 'dayGridMonth'
//     });
//      calendar.render();
// });

// console.log(calendar)



// for (i = 0; i < tout.lenght; i++) {




// calendar.addEvent( tout. [, source ] )

// async function datesISO() {
//     let reponse = await fetch(calendar);
//     let event = await reponse.json();
//     event.forEach(element => {
//         tout.push(element);
//         console.log(tout)
//     })
// }
// tout.push(element);
//         console.log(tout)
// datesISO();

// async function dates() {
//     let reponse = await fetch("JSON/dates.json");
//     let event = await reponse.json();
//     event.forEach(element => {
//         calendar.addEvent(element.ShortName [element.Day])
//     })
// }
