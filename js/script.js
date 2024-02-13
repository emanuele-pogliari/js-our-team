const team = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg",
    },

    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg",
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg",
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg",
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg",
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg",
    }
];


const listElement = document.querySelectorAll(".my-list");
const cardElement = document.querySelectorAll(".my-card");

for (let i = 0; i < team.length; i++) {
    let name = "";
    let role = "";
    let imgs = "";
    const worker = team[i];
    for (let key in worker) {
        if (key == "foto") {
            imgs += `<img class="img-fluid" src="./img/${worker['foto']}">`
        }
        else if (key == "nome") {
            name += `${worker[key]}`;
        }
        else if (key = "ruolo") {
            role += `${worker[key]}`;
        }
    }
    cardElement[i].innerHTML += imgs;
    cardElement[i].innerHTML += `<div class="text-center pt-3">${name}</div>`
    cardElement[i].innerHTML += `<div class="text-center pt-2 pb-3">${role}</div>`
}


