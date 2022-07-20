
const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=8"
// const url = "https://swapi.dev/api/people/?offset=8&limit=8";
//----- accesos HTML ------
const divGaleria = document.getElementById("galeria__hombres");

const obtenerPokemon = async () => {
    try {
        const respuesta = await fetch((url),{ method: 'GET' });
        // console.log(respuesta);
        const datos = await respuesta.json();
        console.log(datos);
        galeriaPokemon(datos);

    } catch (error) {
        console.log(error);
    }
}

const galeriaPokemon = (pokmn) =>{

    pokmn.results.forEach( el => {
            
        const div = document.createElement("div");
        div.className = "col-lg-6 col-md-10 col-sm-12";
        div.innerHTML = `<article class="shirt">
                            <img class="imgRopa img-fluid img-thumbnail" src=${el.url}>
                            <article class="shirt__info">
                                <p>Nombre : ${el.name}</p>
                        </article>`;

        divGaleria.append(div);
    })
}

obtenerPokemon();