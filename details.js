const pokemon = document.getElementById('pokemon');




const fetchPokemonDetails = () => {
    fetch(apiURL)
    .then((res) => res.json())
    .then((data) => {  
         pokemonRequest = data.results.map((pokemons) => {
        
           // Utilizamos split() para obtener el número del Pokemon de la URL que es el ID
              const pkmID = pokemons.url.split('/')[6];
              return {
              id: pkmID,
              name: pokemons.name,
              url: pokemons.url,
              img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+pkmID+".png"
            };
          });
          pokemonDetailsDisplay(pokemonRequest);
        });
        
    };

    const pokemonDetailsDisplay = (pkm) => {
        const printPokeDetails = pkm
         .map(
           pokeDetails =>  
         
             `
             <a class="card-container" href="">
             <span class="poke-number">#${pokeDetails.id}</span>
             <img src="${pokeDetails.img}" alt="${pokeDetails.name}">
         
             <h2 class="poke-name">${pokelist.name}</h2>
             
             `
          ).join('');// Unir los elementos de la lista en una sola cadena de HTML
     pokedexDetails.innerHTML = printPokeDetails;
  }