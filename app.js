
<<<<<<< Updated upstream
=======
const fetchPokemon = (limit, offset) => {
                    fetch(apiURL + '?limit=' + limit + '&offset=' + offset)
                    .then((res) => res.json())
                    .then((data) => { 
                        const pkm = data.results.map((pokemons, index) => ({
                              id: index +1,
                              name: pokemons.name,
                              url: pokemons.url,
                              img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ parseInt(index+1) +".png"
                          }
                         
                        )
                      )
                     pokemonListDisplay(pkm);
                    }
                  )
>>>>>>> Stashed changes

const fetchPokemon = () => {
    
    const api = `https://pokeapi.co/api/v2/pokemon/`; 
 
                    fetch(api).then((res) => res.json())
                    .then((data) => {
                        const pkm = data.results.map((pokemon) => ({
                          id: pokemon.id,
                          name: pokemon.name,
                        }));
                        console.log(pkm);
                      })                 

 console.log(api)
         
    

     
};

<<<<<<< Updated upstream
=======
const pokemonListDisplay = (pkm) => {
        const printPokelist = pkm.map(
          pokelist => 
            `
            <a class="card-container" href="">
            <span class="poke-number">#${pokelist.id}</span>
            <img src="${pokelist.img}" alt="${pokelist.name}">
        
            <h2 class="poke-name">${pokelist.name}</h2>
            
            `
         ).join('');// Unir los elementos de la lista en una sola cadena de HTML
    pokedex.innerHTML = printPokelist;
 }
 

cantidadElementos.addEventListener('change', () => {
  const cantidad = cantidadElementos.value;
  const offset = 0; 
  fetchPokemon(cantidad, offset);
});
>>>>>>> Stashed changes



fetchPokemon()