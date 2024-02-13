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


const listElement = document.querySelector("#list");

for (let i = 0; i < team.length; i++) {
    let strings = "";
    const worker = team[i];
    for (let key in worker) {

        if (key == "foto") {
            strings += `<img src="./img/${worker['foto']}">`
        }
        else {
            strings += `${key}: ${worker[key]} <br>`;

        }
    }
    listElement.innerHTML += `<li>${strings}</li>`

}


