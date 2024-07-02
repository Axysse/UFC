
document.addEventListener('DOMContentLoaded', function () {
    let all = [];
    fetch("./JSON/Fighters.json")
    .then(res => res.json())
    .then(datas => {
        console.log(datas);

        for ( let i = 0; i < datas.length; i++) {
            all.push({ FirstName: datas[i].FirstName, LastName: datas[i].LastName, Birth: datas[i].BirthDate, Height: datas[i].Height, Weight: datas[i].Weight, Wins: datas[i].Wins, Losses: datas[i].Losses });
        }
        console.log(all)


new gridjs.Grid({
    columns: [{
        id: "FirstName",
        name: "Prénom"
    }, {
        id: "LastName",
        name: "Nom"
    }, {
        id: "Birth",
        name: "Date de naissance"
    }, {
        id: "Height",
        name: "Taille"
    }, {
        id: "Weight",
        name: "Poids"
    }, {
        id: "Wins",
        name: "Victoires"
    }, {
        id: "Losses",
        name: "Défaites"
    }, {
        name: "Détails",
        formatter: (cell, row) => {
            return gridjs.h('button', {
              className: 'py-2 mb-4 px-4 border rounded-md text-white bg-blue-600',
              onClick: () => alert(`Editing "${row.cells[0].data}" "${row.cells[1].data}"`)
            }, 'Edit');
    }},],
    sort: true,
    search: true,
    pagination : true,
    data: all,
  }).render(document.getElementById("wrapper"));
})
})

