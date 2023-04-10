const pokedex = document.getElementById('pokedex'); /* recogemos los datos del html */
const cantidadElementos = document.getElementById("cantidad");
const apiURL = `https://pokeapi.co/api/v2/pokemon/`; 

const fetchPokemon = (limit, offset) => {
                    fetch(apiURL + '?limit=' + limit + '&offset=' + offset)
                    .then((res) => res.json())
                    .then((data) => { 
                        const pkm = data.results.map((pokemons) => ({
                              name: pokemons.name,
                              url: pokemons.url
                          }
                          
                        )
                      )
                     pokemonListDisplay(pkm);
                    }
                  )

};

const pokemonListDisplay = (pkm) => {
        const printPokelist = pkm.map(
          pokelist => 
            `
              <ul> 
                <li>${pokelist.name}</li>
              </ul>
            `
         ).join('');// Unir los elementos de la lista en una sola cadena de HTML
    pokedex.innerHTML = printPokelist;
 }
 

cantidadElementos.addEventListener('change', () => {
  const cantidad = cantidadElementos.value;
  const offset = 0; 
  fetchPokemon(cantidad, offset);
});



fetchPokemon(cantidadElementos.value, 0)