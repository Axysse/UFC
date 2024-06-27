let date = Date.now();
console.log(date);

let date1 = new Date();
dateUTC = date1.toISOString();
console.log(dateUTC)

let tout = [];

async function mainEvent() {
    let reponse = await fetch("JSON/dates.json");
    let event = await reponse.json();
    event.forEach(element => {
        if (element.Day > dateUTC) {
            tout.push(element);
        }
    })
    console.log(tout);
    
}

mainEvent();


document.addEventListener('DOMContentLoaded', function () {

    fetch("JSON/dates.json")
    .then(res => res.json())
    .then (res => {
        var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        for (i = 0; i < tout.lenght; i++) {
        events: [
            {
            title :  tout[0].ShortName,
            start : tout[0].Day
            }
        ]
    }
    });
     calendar.render();
})})
    
//     var calendarEl = document.getElementById('calendar');
//     var calendar = new FullCalendar.Calendar(calendarEl, {
//         initialView: 'dayGridMonth'
//     });
//      calendar.render();
// });

// console.log(calendar)








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
