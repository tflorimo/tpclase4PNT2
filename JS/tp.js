const personajes = [
    {
        id: 1,
        nombre: "John Frusciante",
        edad: 52,
        imagen: "https://i.imgur.com/CvMvh.jpeg",
        lugar_nacimiento: "Queens, NY",
        tipo: "Guitarrista"
    },
    {
        id: 2,
        nombre: "Anthony Kiedis",
        edad: 59,
        imagen: "https://i.imgur.com/Xtdjv.jpeg",
        lugar_nacimiento: "Grand Rapids, MI",
        tipo: "Vocalista"
    },
    {
        id: 3,
        nombre: "Chad Smith",
        edad: 60,
        imagen: "https://i.imgur.com/bfx5ps7.png",
        lugar_nacimiento: "St. Paul, MN",
        tipo: "Baterista"
    },
    {
        id: 4,
        nombre: "Flea",
        edad: 59,
        imagen: "https://i.imgur.com/i0uSHnn.png",
        lugar_nacimiento: "Melbourne, Australia",
        tipo: "Bajista"
    },
    {
        id: 5,
        nombre: "Tom Morello",
        edad: 57,
        imagen: "https://i.imgur.com/OS2u8fq.jpeg",
        lugar_nacimiento: "New York City, NY",
        tipo: "Guitarrista"
    },
    {
        id: 6,
        nombre: "Chris Cornell",
        edad: 52,
        imagen: "https://i.imgur.com/bqS9Fpc.jpeg",
        lugar_nacimiento: "Detroit, Michigan",
        tipo: "Vocalista"
    },
    {
        id: 7,
        nombre: "Phoebe",
        edad: 7,
        imagen: "https://i.imgur.com/8wGzLPj.jpeg",
        lugar_nacimiento: "Córdoba Capital, Córdoba",
        tipo: "Gato"
    },
    {
        id: 8,
        nombre: "Oliver Taylor Hawkins",
        edad: 50,
        imagen: "https://i.imgur.com/D6HfHwX.jpeg",
        lugar_nacimiento: "Laguna Beach, CA",
        tipo: "Baterista"
    },
    {
        id: 9,
        nombre: "Muzzo",
        edad: 3,
        imagen: "https://i.imgur.com/3FNKDv9.jpeg",
        lugar_nacimiento: "Rafael Calzada, Buenos Aires",
        tipo: "Gato"
    }
]

const mostrar = () => {
    var target = document.getElementById("row");
    document.getElementById("id").value = "";
    document.getElementById("tipo").value = "";
    target.innerHTML = "";
    personajes.forEach(personaje => {
        let carta = dibujarCarta(personaje);
        target.insertAdjacentHTML("afterbegin", carta);
    })
}

const searchById = () => {

    var id = parseInt(document.getElementById("id").value);
    var target = document.getElementById("row");
    let personaje = personajes.find(personaje => personaje.id == id);
    let carta = dibujarCarta(personaje);
    target.innerHTML = "";
    target.insertAdjacentHTML("afterbegin", carta);

}

const searchByTipo = () => {

    var tipo = document.getElementById("tipo").value;
    var target = document.getElementById("row");
    let personajesBuscados = personajes.filter(personaje => personaje.tipo.toLowerCase() == tipo.toLowerCase()); // convierto a lower case para que sin importar lo que me tipee el usuario , siempre salga bien
    target.innerHTML = "";
    
    personajesBuscados.forEach(personaje => {
        let carta = dibujarCarta(personaje);
        target.insertAdjacentHTML("afterbegin", carta);
    })

}

const search = () => {
    var tipo = document.getElementById("tipo").value;
    var id = parseInt(document.getElementById("id").value);

    // como se indica que puedo filtrar por tipo O id, busco por UNO de los dos
    // si no viene nada en tipo, y el id es numerico, busco por ID
    if(tipo == "" && !Number.isNaN(id)){
        searchById(id);
    } else if(tipo != "" && Number.isNaN(id)){
        searchByTipo(tipo);
    } else {
        mostrar();
    }
}

const dibujarCarta = (personaje) => {

    let carta = `
    <div class="card" style="width: 18rem;">
        <img src="${personaje.imagen}" class="card-img-top" alt="Imagen para ${personaje.nombre}">
        <div class="card-body">
            <h5 class="card-title" style="color:black;">${personaje.nombre}</h5>
            <p class="card-text" style="color:black;">${personaje.nombre}, nacido en ${personaje.lugar_nacimiento}. Tiene ${personaje.edad} años y es de tipo ${personaje.tipo}</p>
        </div>
    </div>`;

    return carta;
}

const showAdd = () => {
    document.getElementById("row").style.display = "none";
    document.getElementById("formBusqueda").style.display = "none";
    document.getElementById("formAltas").style.display = "";
    
    document.getElementById("botonDeCarga").style.display = "";
    document.getElementById("indicadorRepetido").style.display = "none";

    document.getElementById("idAdd").focus();

    document.getElementById("idAdd").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("imagen").value = "";
    document.getElementById("lugar_nacimiento").value = "";
    document.getElementById("tipoAdd").value = "";
}

const hideAdd = () => {
    document.getElementById("row").style.display = "";
    document.getElementById("formBusqueda").style.display = "";
    document.getElementById("formAltas").style.display = "none";
}


const addNew = () => {

    let nuevoPersonaje = {
        id: document.getElementById("idAdd").value,
        nombre: document.getElementById("nombre").value,
        edad: document.getElementById("edad").value,
        imagen: document.getElementById("imagen").value,
        lugar_nacimiento: document.getElementById("lugar_nacimiento").value,
        tipo: document.getElementById("tipoAdd").value
    }

    let personajeRepetido = personajes.find(personaje => personaje.id = nuevoPersonaje.id);

    // faltaria alguna validacion para que no se cargue cuando los campos vienen vacíos
    if(personajeRepetido){
        document.getElementById("botonDeCarga").style.display = "none";
        document.getElementById("indicadorRepetido").style.display = "";
    } else {
        personajes.push(nuevoPersonaje);
        hideAdd();
        mostrar();
    }


}


window.onload = mostrar;