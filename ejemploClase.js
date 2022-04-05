const start = async () => {
    try{
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const {info, results: personajes} = await response.json();
    console.log(personajes);
    personajes.forEach((character) => {
        const card = `
            <div class = "col-4 mt-4">
            <div class="card" style="width: 18rem;">
            <img src="${character.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${character.name}</h5>
              <p class="card-text">Origen : ${character.origin.name}.</p>
              <p class="card-text">Estado : ${character.status}.</p>
              <p class="card-text">Especie : ${character.species}.</p>
            </div>
            </div>
            </div>`;
        document.getElementById('cards').insertAdjacentHTML('beforeend', card);
    })
    }
    catch(err){
        console.error(err);
    }
}


window.onload = start();