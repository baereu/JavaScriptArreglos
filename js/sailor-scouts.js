let SailorScouts = [
  {
    name: "Sailor Moon",
    type: "Cristal de Plata",
    number: 1,
    description: "Usagi Tsukino, una adolescente llorona que resulta ser la legendaria Princesa Serenity."
  },
  {
    name: "Sailor Mercury",
    type: "Agua/Hielo",
    number: 2,
    description: "Ami Mizuno, amiga de Usagi y una estudiante genio."
  },
  {
    name: "Sailor Mars",
    type: "Fuego",
    number: 3,
    description: "Rei Hino, una sacerdotisa que tiene la habilidad de ver el futuro en el fuego."
  },
  {
    name: "Sailor Jupiter",
    type: "Trueno/Naturaleza",
    number: 4,
    description: "Makoto Kino, una chica de gran fuerza que ama cocinar y la jardinería."
  },
  {
    name: "Sailor Venus",
    type: "Luz/Amor",
    number: 5,
    description: "Minako Aino, una carismática aspirante a idol que operaba como la superheroína Sailor V."
  }
];

console.table(SailorScouts);
console.log(SailorScouts[3].name);

// Agregar una Scout usando forEach y push
const nuevaScout = {
  name: "Sailor Saturn",
  type: "Destrucción/Renacimiento",
  number: 6,
  description: "Hotaru Tomoe, la guardiana de Saturno."
};

let existe = false;

SailorScouts.forEach((scout) => {
  if (
    scout.name.toLowerCase() === nuevaScout.name.toLowerCase() ||
    scout.number === nuevaScout.number
  ) {
    existe = true;
  }
});

if (existe) {
  console.log("La Sailor Scout ya existe por nombre o número.");
} else {
  SailorScouts.push(nuevaScout);
  console.log("La Sailor Scout ha sido agregada a la lista.");
}

// filter: obtener Scouts de tipo Fuego
const scoutsDeFuego = SailorScouts.filter(
  (scout) => scout.type === "Fuego"
);

console.log("Scouts de tipo Fuego:");
console.table(scoutsDeFuego);

// map: obtener los nombres de las Scouts
const nombresScouts = SailorScouts.map((scout) => scout.name);

console.log("Nombres de las Sailor Scouts:", nombresScouts);

// find: buscar una Scout por nombre
const scoutBuscada = SailorScouts.find(
  (scout) => scout.name === "Sailor Mercury"
);

console.log("Scout encontrada:", scoutBuscada);

// CREATE: agregar una Scout
function crearScout(nuevaScout) {
  const scoutExistente = SailorScouts.find(
    (scout) =>
      scout.name.toLowerCase() === nuevaScout.name.toLowerCase() ||
      scout.number === nuevaScout.number
  );

  if (scoutExistente) {
    console.log("No se agregó: su nombre o número ya existe.");
    return;
  }

  SailorScouts.push(nuevaScout);
  console.log(`Scout "${nuevaScout.name}" agregada con éxito.`);
}

// READ: mostrar todas las Scouts
function leerScouts() {
  console.log("--- LISTA DE SAILOR SCOUTS ---");

  SailorScouts.forEach((scout) => {
    console.log(
      `${scout.number}. ${scout.name} | Tipo: ${scout.type} | Descripción: ${scout.description}`
    );
  });
}

// UPDATE: actualizar una Scout por nombre
function actualizarScout(nombre, cambios) {
  const scoutEncontrada = SailorScouts.find(
    (scout) => scout.name.toLowerCase() === nombre.toLowerCase()
  );

  if (!scoutEncontrada) {
    console.log(`No se encontró la Scout "${nombre}".`);
    return;
  }

  const scoutActualizada = { ...scoutEncontrada, ...cambios };

  const duplicada = SailorScouts.find(
    (scout) =>
      scout !== scoutEncontrada &&
      (
        scout.name.toLowerCase() === scoutActualizada.name.toLowerCase() ||
        scout.number === scoutActualizada.number
      )
  );

  if (duplicada) {
    console.log("No se actualizó: su nombre o número ya existe.");
    return;
  }

  Object.assign(scoutEncontrada, cambios);
  console.log(`Scout "${nombre}" actualizada correctamente.`);
}

// DELETE: borrar una Scout por nombre
function borrarScout(nombre) {
  const scoutEncontrada = SailorScouts.find(
    (scout) => scout.name.toLowerCase() === nombre.toLowerCase()
  );

  if (!scoutEncontrada) {
    console.log(`No se encontró la Scout "${nombre}".`);
    return;
  }

  SailorScouts = SailorScouts.filter(
    (scout) => scout.name.toLowerCase() !== nombre.toLowerCase()
  );

  console.log(`Scout "${nombre}" eliminada de la lista.`);
}

// Demostración CRUD
console.log("\n=== DEMOSTRACIÓN CRUD ===");
console.log("ESTADO INICIAL:");
console.table(SailorScouts);

console.log("\n--- 1. CREAR ---");
crearScout({
  name: "Sailor Uranus",
  type: "Cielo/Viento",
  number: 7,
  description: "Haruka Tenoh, la guardiana de Urano."
});

console.log("\n--- 2. LEER ---");
leerScouts();

console.log("\n--- 3. ACTUALIZAR ---");
actualizarScout("Sailor Uranus", {
  description: "Haruka Tenoh, guardiana de Urano y apasionada del automovilismo."
});

console.log("\n--- 4. BORRAR ---");
borrarScout("Sailor Uranus");

console.log("\nESTADO FINAL:");
console.table(SailorScouts);