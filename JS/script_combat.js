
document.addEventListener('DOMContentLoaded', function () {
    let all = [];
    fetch("./JSON/Fighters.json")
        .then(res => res.json())
        .then(datas => {
            console.log(datas);

            for (let i = 0; i < datas.length; i++) {
                all.push({ FirstName: datas[i].FirstName, LastName: datas[i].LastName, Birth: datas[i].BirthDate, Height: datas[i].Height, Weight: datas[i].Weight, Wins: datas[i].Wins, Losses: datas[i].Losses });
            }

            new gridjs.Grid({
                columns: [{
                    id: "FirstName",
                    name: "Prénom"
                }, {
                    id: "LastName",
                    name: "Nom"
                }, {
                    id: "Birth",
                    name: "Date de naissance",
                    formatter: (cell) => `${cell}`.replace("T00:00:00", "")
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
                            className: 'px-4 py-2 text-white bg-indigo-500 rounded',
                            onClick: () => alert(`Guerrier "${row.cells[0].data}" "${row.cells[1].data}"`)
                        }, 'Infos');
                    }
                },],
                sort: true,
                search: true,
                pagination: true,
                data: all,
            }).render(document.getElementById("wrapper"));
        })
})



const modal = document.getElementById("modal");
const openModalButton = document.getElementById("openModalButton");
const closeModalButtonTop = document.getElementById(
    "closeModalButtonTop"
);
const closeModalButtonBottom = document.getElementById(
    "closeModalButtonBottom"
);
const secondaryActionButton = document.getElementById(
    "secondaryActionButton"
);

openModalButton.addEventListener("click", () => {
    modal.classList.remove("closing");
    modal.showModal();
    modal.classList.add("showing");
});

closeModalButtonTop.addEventListener("click", closeModal);
closeModalButtonBottom.addEventListener("click", closeModal);

function closeModal() {
    modal.classList.remove("showing");
    modal.classList.add("closing");
    modal.addEventListener(
        "animationend",
        () => {
            modal.close();
            modal.classList.remove("closing");
        },
        { once: true }
    );
}



secondaryActionButton.addEventListener("click", () => {
    let mod = document.getElementById("mod")
    let search = document.getElementById("search").value

    fetch("./JSON/Fighters.json")
        .then(res => res.json())
        .then(data => {
            console.log(mod);
            for (let j = 0; j < data.length; j++) {
                if (data[j].FirstName == search || data[j].LastName == search) {
                    mod.innerText = data[j].FirstName + " " + data[j].LastName + ": " + data[j].Wins + " victoires " + data[j].Losses + " défaites."
                    break;
                } else {
                    mod.innerText = "Erreur"
                }
            }
        })
})
