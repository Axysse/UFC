
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

para = document.getElementById("para");
para.addEventListener("click", () => {
    if (para.innerHTML = "paradise") {
    document.getElementById('calendar').style.backgroundImage="url(./images/Vince.png)";
    para.innerHTML = "Retour sur terre";
    }
    console.log("T'a appuyé, t'aurais pas dû.")
})

