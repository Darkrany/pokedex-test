const urlParams = new URLSearchParams(window.location.search);
const pokemonId = urlParams.get('id');
const apiURL = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`; 




console.log(apiURL)
const fetchPokemonDetails = () => {
  fetch(apiURL)
  .then((res) => res.json())
  .then((data) => {  
    console.log(data)             

       pokemonDetailsRequest = {
        nombre: data.name,
        id: data.id,
        img: data.sprites.front_default
       };
       console.log(pokemonDetailsRequest)
       // pokemonDetailsDisplay(pokemonDetailsRequest);
  });
};
  //   const pokemonDetailsDisplay = (pkm) => {
  //       const printPokeDetails = pkm
  //        .map(
  //          pokeDetails =>  
         
  //            `
  //            <a class="card-container" href="">
  //            <span class="poke-number">#${pokeDetails.id}</span>
  //            <img src="${pokeDetails.img}" alt="${pokeDetails.name}">
         
  //            <h2 class="poke-name">${pokelist.name}</h2>
             
  //            `
  //         ).join('');// Unir los elementos de la lista en una sola cadena de HTML
  //    pokedexDetails.innerHTML = printPokeDetails;
  // }

  fetchPokemonDetails()