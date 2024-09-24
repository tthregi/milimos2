let aktualisKerdes = 0;
let egyenleg = 0;
let hibasValaszok = 0; 
let felezesHasznalva = false;  
let telefonHasznalva = false; 

const kerdesek = [
    {
        kerdes: "Mi a három alapszín?",
        valaszok: [
            { valasz: "Sárga/Zöld/Piros", helyes: false },
            { valasz: "Piros/Zöld/Kék", helyes: true },
            { valasz: "Narancs/Lila/Kék", helyes: false },
            { valasz: "Piros/Sárga/Lila", helyes: false }
        ],
        osszeg: 500
    },
    {
        kerdes: "Ki találta fel a Rubik kockát?",
        valaszok: [
            { valasz: "Rubik Ernő", helyes: true },
            { valasz: "Pálfy Máté Gergely", helyes: false },
            { valasz: "Kocka Ernő", helyes: false },
            { valasz: "Rubik Sándor", helyes: false }
        ],
        osszeg: 5000
    },
    {
        kerdes: "Az alábbiak közül melyik primszám?",
        valaszok: [
            { valasz: "1", helyes: false },
            { valasz: "27", helyes: false },
            { valasz: "141", helyes: false },
            { valasz: "13", helyes: true }
        ],
        osszeg: 15000
    },
    {
        kerdes: "Miből készül a Tofu?",
        valaszok: [
            { valasz: "Mandulatej", helyes: false },
            { valasz: "Szójatej", helyes: true },
            { valasz: "Rizstej", helyes: false },
            { valasz: "Állati eredetű tej", helyes: false }
        ],
        osszeg: 20000
    },
    {
        kerdes: "Mi a kén vegyjele?",
        valaszok: [
            { valasz: "Y", helyes: false },
            { valasz: "S", helyes: true },
            { valasz: "K", helyes: false },
            { valasz: "CE", helyes: false }
        ],
        osszeg: 50000
    },
    {
        kerdes: "Hol fekszik a Németalföld?",
        valaszok: [
            { valasz: "Hollandia és Belgium", helyes: true },
            { valasz: "Németorszég", helyes: false },
            { valasz: "Lengyel és Litvánia", helyes: false },
            { valasz: "Ezek közül egyik sem", helyes: false }
        ],
        osszeg: 100000
    },
    {
        kerdes: "Melyik bolygó a Naprendszerben a legnagyobb?",
        valaszok: [
            { valasz: "Föld", helyes: false },
            { valasz: "Jupiter", helyes: true },
            { valasz: "Mars", helyes: false },
            { valasz: "Szaturnusz", helyes: false }
        ],
        osszeg: 200000
    },
    {
        kerdes: "Melyik városból indult a koronavírus?",
        valaszok: [
            { valasz: "Peking", helyes: false },
            { valasz: "Vuhan", helyes: true },
            { valasz: "Shanghai", helyes: false },
            { valasz: "Olso", helyes: false }
        ],
        osszeg: 500000
    },
    {
        kerdes: "Hány évig él egy sisakos kaméleon (hím)?",
        valaszok: [
            { valasz: "2-3", helyes: false },
            { valasz: "6-8", helyes: true },
            { valasz: "9-12", helyes: false },
            { valasz: "5-9", helyes: false }
        ],
        osszeg: 1000000
    },
    {
        kerdes: "Hány megye van Magyarországon?",
        valaszok: [
            { valasz: "17", helyes: false },
            { valasz: "19", helyes: true },
            { valasz: "22", helyes: false },
            { valasz: "18", helyes: false }
        ],
        osszeg: 1500000
    },
    {
        kerdes: "Hány torony van az Idézők szurdokában?",
        valaszok: [
            { valasz: "12", helyes: false },
            { valasz: "22", helyes: true },
            { valasz: "20", helyes: false },
            { valasz: "2", helyes: false }
        ],
        osszeg: 2000000
    },
    {
        kerdes: "Hagyja a dagadt ruhát másra- ?",
        valaszok: [
            { valasz: "Ugyis szüksége van egy kis alvásra.", helyes: false },
            { valasz: "Engem vigyen fel a padlásra.", helyes: true },
            { valasz: "Had adok egy csókot az ajkára.", helyes: false },
            { valasz: "Nyikorgó kosárral ölében.", helyes: false }
        ],
        osszeg: 3000000
    },
    {
        kerdes: "Mi a reneszánsz jelentése?",
        valaszok: [
            { valasz: "Újjászületés", helyes: true },
            { valasz: "Lélekvándorlás", helyes: false },
            { valasz: "Fohászkodni az úrhoz", helyes: false },
            { valasz: "Újragondolni az életed", helyes: false }
        ],
        osszeg: 4000000
    },
    {
        kerdes: "Ki találta fel a villanykörtét?",
        valaszok: [
            { valasz: "Nikola Tesla", helyes: false },
            { valasz: "Thomas Edison", helyes: true },
            { valasz: "Albert Einstein", helyes: false },
            { valasz: "Isaac Newton", helyes: false }
        ],
        osszeg: 5000000
    },
    {
        kerdes: "Mi a Dromedár?",
        valaszok: [
            { valasz: "Egy madár", helyes: false },
            { valasz: "Egy emlős fajta", helyes: true },
            { valasz: "Egy elektronikai találmány", helyes: false },
            { valasz: "Ezek közül egyiksem", helyes: false }
        ],
        osszeg: 10000000
    }
];



const kerdesElem = document.querySelector(".kerdes");
const valaszokElem = document.querySelector(".valaszok");
const eredmenyElem = document.querySelector(".eredmeny");
const egyenlegElem = document.querySelector(".egyenleg");

function ujKerdes() {
    if (aktualisKerdes < kerdesek.length) {
        const kerdes = kerdesek[aktualisKerdes];
        kerdesElem.textContent = kerdes.kerdes;
        valaszokElem.innerHTML = "";
        kerdes.valaszok.forEach((valasz, index) => {
            const div = document.createElement("div");
            div.textContent = valasz.valasz;
            div.classList.add("valasz");
            div.dataset.correct = valasz.helyes;
            div.addEventListener("click", ellenorizValasz);
            valaszokElem.appendChild(div);
        });
    } else {
        vegJatek();
    }
}

function ellenorizValasz(event) {
    const valaszElem = event.target;
    const helyes = valaszElem.dataset.correct === "true";

    if (helyes) {
        egyenleg += kerdesek[aktualisKerdes].osszeg;
        egyenlegElem.textContent = `Jelenlegi egyenleg: ${egyenleg} Ft`;
        eredmenyElem.textContent = "Helyes válasz!";
    } else {
        hibasValaszok++;
        eredmenyElem.textContent = "Helytelen válasz!";
        if (hibasValaszok >= 3) { 
            vegJatek();
            return;
        }
    }

    eredmenyElem.style.display = "block";
    setTimeout(() => {
        aktualisKerdes++;
        ujKerdes();
        eredmenyElem.style.display = "none";
    }, 2000);
}

function vegJatek() {
    kerdesElem.textContent = "A játék véget ért!";
    valaszokElem.innerHTML = "";
    eredmenyElem.style.display = "none";
    egyenlegElem.textContent = `Végeredmény: ${egyenleg} Ft`;
}

document.getElementById("felezes").addEventListener("click", () => {
    if (felezesHasznalva) return; 
    felezesHasznalva = true; 

    const valaszok = document.querySelectorAll(".valasz");
    let helyesValasz = null;
    valaszok.forEach(valasz => {
        if (valasz.dataset.correct === "true") {
            helyesValasz = valasz;
        }
    });


    let hibas = 0;
    valaszok.forEach(valasz => {
        if (valasz !== helyesValasz && hibas < 2) {
            if (Math.random() < 0.5) {
                valasz.style.display = "none";
                hibas++;
            }
        }
    });

    
    document.getElementById("felezes").classList.add("disabled");
});

document.getElementById("telefon").addEventListener("click", () => {
    if (telefonHasznalva) return;  
    telefonHasznalva = true;  

    const valaszok = document.querySelectorAll(".valasz");
    let helyesValasz = null;
    valaszok.forEach(valasz => {
        if (valasz.dataset.correct === "true") {
            helyesValasz = valasz;
        }
    });

   
    alert(`Telefonos segítség: A helyes válasz: ${helyesValasz.textContent}`);

   
    document.getElementById("telefon").classList.add("disabled");
});

ujKerdes(); 