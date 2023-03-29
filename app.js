

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




fetchPokemon()