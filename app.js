const pokedex = document.getElementById('pokedex'); /* recogemos los datos del html */
const cantidadPkms = document.getElementById("cantidad");
const searchPkm = document.getElementById('search-form');
const apiURL = `https://pokeapi.co/api/v2/pokemon/`; 
let pokemonRequest = []; //Almacenamos resultados del fetch
let searchLimit = 0;
let pkmsPerPages = cantidadPkms.value;
let currentPage = 1;

 // Petición a API para obtener lista Pokemons

const fetchPokemon = (limit, offset) => {
                    fetch(apiURL + '?limit=' + limit + '&offset=' + offset)
                    .then((res) => res.json())
                    .then((data) => { 
                         pokemonTotal = data.count;
                         searchLimit = pokemonTotal; // Asignamos el valor de pokemonTotal a la variable searchLimit
                         pokemonRequest = data.results.map((pokemons) => {
                          
                        
                           // Utilizamos split() para obtener el número del Pokemon de la URL que es el ID
                              const pkmID = pokemons.url.split('/')[6];
                              const pkmName = pokemons.name.charAt().toUpperCase() + pokemons.name.substring(1)
                              //El nombre nos viene en minuscula le ponemos la primera en mayuscula
                              return {
                              id: pkmID,
                              name: pkmName,
                              url: pokemons.url,
                              img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+pkmID+".png"
                            };
                          });
                          pokemonListDisplay(pokemonRequest);
                        });
                        
                    };

//Mostrar en la lista por HTML
                                               
const pokemonListDisplay = (pkm) => {
       const printPokelist = pkm
        .map(
          pokelist =>  
        
            `
            
            <a class="card-container" href="details.html?id=${pokelist.id}">
            <span class="poke-number">#${pokelist.id}</span>
            <img class="poke-image" src="${pokelist.img}" alt="${pokelist.name}" id="${pokelist.id}">
            <h2 class="poke-name" id="${pokelist.id}">${pokelist.name}</h2>
         
            
            `
         ).join('');// Unir los elementos de la lista en una sola cadena de HTML
    pokedex.innerHTML = printPokelist;
 }
 

 // Listado por pagina y botón de avanzar y retroceder

cantidadPkms.addEventListener('change', () => {
  pkmsPerPages = cantidadPkms.value;
  currentPage = 1; //reiniciamos la pagina actual
  console.log("pkmsPerPages",pkmsPerPages)
  fetchPokemon(pkmsPerPages);
});

const pageNext = document.getElementById('pageNext');
pageNext.addEventListener('click', () => { console.log("currentPage",currentPage)
  if ((currentPage * pkmsPerPages) < searchLimit) {
    currentPage++;
    const offset = (currentPage - 1) * pkmsPerPages; //Calculamos el indice del primer pokemon en la pagina actual con la resta, despues multiplicamos para mostrar cada pagina
    console.log("offset",offset)
    fetchPokemon(pkmsPerPages, offset);
  }
});



const pagePrev = document.getElementById('pagePrev');
pagePrev.addEventListener('click', () => {
  if (currentPage > 1) { 
    currentPage--;
    const offset = (currentPage - 1) * pkmsPerPages;
    fetchPokemon(pkmsPerPages, offset);
  }
});



// Filtro de busqueda de pokemons
searchPkm.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchInput = document.getElementById('search-input').value;
  if (searchInput.length <= 0) {  // Si la cadena que viene procedente de la busqueda esta vacia no realiza una busqueda con el count total

  }else {
  fetch(apiURL + `?limit=${searchLimit}`)
    .then(res => res.json())
    .then(data => {
      const filteredResults = data.results.filter(pokemon => 
        pokemon.name.startsWith(searchInput)
      ).map(pokemon => {
        const pkmID = pokemon.url.split('/')[6];
        return {
          id: pkmID,
          name: pokemon.name,
          url: pokemon.url,
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+pkmID+".png"
        };
      });
      pokemonListDisplay(filteredResults);
    })
    .catch(error => console.error(error));
  }
});



fetchPokemon(cantidadPkms.value, 0);