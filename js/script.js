let SailorScouts = [
    {
        name: "Sailor Moon",
        type: "Cristal de Plata",
        number: 1,
        description: "Usagi Tsukino, una adolescente llorona que resulta ser la legendaria Princesa Serenity.",
    },
    {
        name: "Sailor Mercury",
        type: "Agua/hielo",
        number: 2,
        description: "Ami Mizuno, mejor amiga de usagi; una estudiante genio con el IQ mas alto de la escuela.",
    },
    {
        name: "Sailor Mars",
        type: "Fuego",
        number: 3,
        description: "Rei Hino, una hermosa sacerdotista que tiene la habilidad de ver el futuro en el fuego.",
    },
    {
        name: "Sailor Jupiter",
        type: "Trueno/Naturaleza",
        number: 4,
        description: "Makoto Kino, una chica huérfana y alta que intimida por su fuerza, ama cocinar y la jardinería.",
    },
    {
        name: "Sailor Venus",
        type: "Luz/Amor",
        number: 5,
        description: "Minako Aino, una carismática aspirante a idol que ya operaba en secreto como superheroína Sailor V.",
    }
];

 for(let i = 0; i < SailorScouts.length; i++){
    console.log(SailorScouts[i].name);
 }

 // Ejercicio con forEach
 // Nuevo elemento
let nuevaScout = {
    name: "Sailor Saturn",
    type: "Destrucción/Renacimiento",
    number: 6,
    description: "Hotaru Tomoe, la guardiana de Saturno."
};

// suponemos que no existe
let existe = false;

SailorScouts.forEach((scout) => {
    if (scout.name === nuevaScout.name) {
        existe = true;
    }
});

// Agregamos el elemento si no existe
if (existe) {
    console.log("Esta Sailor Scout ya existe.");
} else {
    SailorScouts.push(nuevaScout);
    console.log("Sailor Scout agregada.");
}

SailorScouts.forEach((scout) => {
    console.log(scout.name);
});
