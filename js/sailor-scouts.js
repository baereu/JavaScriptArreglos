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

// agregar un elemento usando forEach y push

let nuevaScout = {
    name: "Sailor Saturn",
    type: "Destrucción/Renacimiento",
    number: 6,
    description: "Hotaru Tomoe, la guardiana de Saturno."
};

let existe = false;

// si ya existe una Scout con el mismo nombre
SailorScouts.forEach((scout) => {
    if (scout.name === nuevaScout.name) {
        existe = true;
    }
});

// la agregamos cuando no existe
if (existe) {
    console.log("Esta Sailor Scout ya existe.");
} else {
    SailorScouts.push(nuevaScout);
    console.log("Sailor Scout agregada.");
}

console.log("Ejercicio 1: arreglo actualizado");
console.table(SailorScouts);


// filter()
// Scouts de tipo Fuego
let scoutsDeFuego = SailorScouts.filter((scout) => {
    return scout.type === "Fuego";
});

console.log("Scouts de tipo Fuego:");
console.table(scoutsDeFuego);

// map()
let nombresScouts = SailorScouts.map((scout) => {
    return scout.name;
});

console.log("Nombres de todas las Sailor Scouts:");
console.log(nombresScouts);

// find()
let scoutEncontrada = SailorScouts.find((scout) => {
    return scout.name === "Sailor Mercury";
});

console.log("Resultado de buscar a Sailor Mercury:");
console.log(scoutEncontrada);


// CRUD
// CREATE
let scoutParaCrear = {
    name: "Sailor Uranus",
    type: "Cielo/Viento",
    number: 7,
    description: "Haruka Tenoh, la guardiana de Urano."
};

let scoutExistente = SailorScouts.find((scout) => {
    return scout.number === scoutParaCrear.number
        || scout.name === scoutParaCrear.name;
});

if (scoutExistente) {
    console.log("No se agregó: su número o nombre ya existe.");
} else {
    SailorScouts.push(scoutParaCrear);
    console.log("CREATE: Sailor Uranus agregada.");
}

console.table(SailorScouts);

// READ
let scoutParaLeer = SailorScouts.find((scout) => {
    return scout.number === 7;
});

console.log("READ: consulta de la Scout número 7");
console.log(scoutParaLeer);

// UPDATE
let scoutParaActualizar = SailorScouts.find((scout) => {
    return scout.number === 7;
});

if (scoutParaActualizar) {
    scoutParaActualizar.description =
        "Haruka Tenoh, guardiana de Urano y apasionada del automovilismo.";

    console.log("UPDATE: descripción actualizada.");
    console.log(scoutParaActualizar);
} else {
    console.log("No se encontró la Scout para actualizar.");
}

// DELETE
let indiceScout = SailorScouts.findIndex((scout) => {
    return scout.number === 7;
});

if (indiceScout !== -1) {
    SailorScouts.splice(indiceScout, 1);
    console.log("DELETE: Sailor Uranus eliminada.");
} else {
    console.log("No se encontró la Scout para eliminar.");
}

console.log("Arreglo final:");
console.table(SailorScouts);
