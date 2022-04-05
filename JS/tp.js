const URL = 'https://rickandmortyapi.com/api/character';



const getPersonajes = async (url = URL, paginado = null) => {
    
    try {
        const res = await fetch(url);
        const {info, results: personajes} = await res.json();
        
        var target = document.getElementById("row");
        target.innerHTML = "";
        personajes.forEach(personaje => {
            let carta = dibujarCarta(personaje);
            target.insertAdjacentHTML("afterbegin", carta);
        });

    } catch(err) {
        console.error(err);
    }
    
}

const mostrar = () => {

    getPersonajes();

}

const searchByName = () => {

    let nombre = document.getElementById("busqueda_nombre").value;

    let url = URL + "?name="+nombre;

    getPersonajes(url);

}

const searchByEspecies = () => {

    let especie = document.getElementById("busqueda_especies").value;

    let url = URL + "?species="+especie;

    getPersonajes(url);

}

const searchByStatus = () => {

    let status = document.getElementById("status").value;

    let url = URL + '?status='+status;

    getPersonajes(url);

}

// const search = () => {
//     var tipo = document.getElementById("tipo").value;
//     var id = parseInt(document.getElementById("id").value);

//     // como se indica que puedo filtrar por tipo O id, busco por UNO de los dos
//     // si no viene nada en tipo, y el id es numerico, busco por ID
//     if(tipo == "" && !Number.isNaN(id)){
//         searchById(id);
//     } else if(tipo != "" && Number.isNaN(id)){
//         searchByTipo(tipo);
//     } else {
//         mostrar();
//     }
// }

const dibujarCarta = (personaje) => {

    let carta = `
    <div class="card" style="width: 18rem;">
        <img src="${personaje.image}" class="card-img-top" alt="Imagen para ${personaje.name}">
        <div class="card-body">
        <h5 class="card-title text-dark">${personaje.name}</h5>
        <p class="card-text text-dark">Origen : ${personaje.origin.name}.</p>
        <p class="card-text text-dark">Estado : ${personaje.status}.</p>
        <p class="card-text text-dark">Especie : ${personaje.species}.</p>
        </div>
    </div>`;

    return carta;
}

window.onload = mostrar;