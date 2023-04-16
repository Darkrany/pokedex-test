const urlParams = new URLSearchParams(window.location.search);
const pokemonId = urlParams.get('id');
const apiURL = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`; 




console.log(apiURL)
const fetchPokemonDetails = () => {
  fetch(apiURL)
  .then((res) => res.json())
  .then((data) => {  
               
    const pkmName = data.name.charAt().toUpperCase() + data.name.substring(1)
       pokemonDetailsRequest = {
        nombre: pkmName,
        id: data.id,
        img: data.sprites.front_default,
        type: data.types.map(type => type.type.name).join(", "),
        stats:data.stats.map(stats => stats.base_stat).join(", "),
        height: data.height,
        weight: data.weight
       };
      
        pokemonDetailsDisplay(pokemonDetailsRequest);
  });
};

const pokemonDetailsDisplay = (pkm) => {
  const printPokeDetails = `
  <div id="left">
  <div id="logo"></div>
  <div id="bg_curve1_left"></div>
  <div id="bg_curve2_left"></div>
  <div id="curve1_left">
    <div id="buttonGlass">
      <div id="reflect"> </div>
    </div>
    <div id="miniButtonGlass1"></div>
    <div id="miniButtonGlass2"></div>
    <div id="miniButtonGlass3"></div>
  </div>
  <div id="curve2_left">
    <div id="junction">
      <div id="junction1"></div>
      <div id="junction2"></div>
    </div>
  </div>
  <div id="screen">
    <div id="topPicture">
      <div id="buttontopPicture1"></div>
      <div id="buttontopPicture2"></div>
    </div>  
    <div id="picture">
      <img src="${pkm.img}" alt="${pkm.nombre}" height="170" />
    </div>
    <div id="buttonbottomPicture"></div>
    <div id="speakers">
      <div class="sp"></div>
      <div class="sp"></div>
      <div class="sp"></div>
      <div class="sp"></div>
    </div>
  </div>
  <div id="bigbluebutton"></div>
  <div id="barbutton1"></div>
  <div id="barbutton2"></div>
  <div id="cross">
    <div id="leftcross">
      <div id="leftT"></div>
    </div>
    <div id="topcross">
      <div id="upT"></div>
    </div>
    <div id="rightcross">
      <div id="rightT"></div>
    </div>
    <div id="midcross">
      <div id="midCircle"></div>
    </div>
    <div id="botcross">
      <div id="downT"></div>
    </div>
  </div>
</div>
<div id="right">
  <div id="stats">
    <strong>Nombre:</strong> ${pkm.nombre} <br/>
    <strong>Tipo:</strong> ${pkm.type}<br/>
    <strong>Altura:</strong> ${pkm.height}''<br/>
    <strong>Peso:</strong> ${pkm.weight} lbs.<br/><br/>
    <strong></strong><br/>

  </div>
  <div id="blueButtons1">
    <div class="blueButton"></div>
    <div class="blueButton"></div>
    <div class="blueButton"></div>
    <div class="blueButton"></div>
    <div class="blueButton"></div>
  </div>
  <div id="blueButtons2">
    <div class="blueButton"></div>
    <div class="blueButton"></div>
    <div class="blueButton"></div>
    <div class="blueButton"></div>
    <div class="blueButton"></div>
  </div>
  <div id="miniButtonGlass4"></div>
  <div id="miniButtonGlass5"></div>
  <div id="barbutton3"></div>
  <div id="barbutton4"></div>
  <div id="yellowBox1">
  <br/>
  <strong>Estadisticas Base<br/>${pkm.stats}</strong></div>
  <div id="yellowBox2">
  <br/>
  <a href="https://www.pokemon.com/es/pokedex/${pkm.nombre}">
  <strong>Más Info<br/></strong>
  </div>
    <br/>
 
  <div id="bg_curve1_right"></div>
  <div id="bg_curve2_right"></div>
  <div id="curve1_right"></div>
  <div id="curve2_right"></div>
</div>


  `;

  pokedex.innerHTML = printPokeDetails;
};
  fetchPokemonDetails()