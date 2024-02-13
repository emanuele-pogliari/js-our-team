// create an array of objects
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

// select card elements
const cardElement = document.querySelectorAll(".my-card");

// for every objects of the array create and inizialize 3 variables that will store values that will be passed on html page, also create a variable that will cointain every single object
for (let i = 0; i < team.length; i++) {
    let name = "";
    let role = "";
    let imgs = "";
    const worker = team[i];

    // for every keys of every object check what key is stored and assign the right value with all conditionals
    for (let key in worker) {
        if (key == "foto") {
            imgs += `<img class="img-fluid" src="./img/${worker['foto']}">`
        }
        else if (key == "nome") {
            name += `${worker[key]}`;
        }
        else {
            role += `${worker[key]}`;
        }
    }

    // print elements to html page
    cardElement[i].innerHTML += imgs;
    cardElement[i].innerHTML += `<div class="my-text-color text-name fs-5 text-center pt-3 fw-bold">${name}</div>`
    cardElement[i].innerHTML += `<div class="my-text-color text-center pt-2 pb-3 small">${role}</div>`
}


