

// newFunction();
// function newFunction() {
//     (function () {
//         const random = (num) => Math.floor(Math.random() * num);
//         var aleatorio = random
//     })();
// }

function chamarApi(){

    var random = (num) => Math.floor(Math.random() * num);
    var aleatorio = random(100)
    console.log(random(899))
  
    var url = `https://pokeapi.co/api/v2/pokemon/${aleatorio}`
	fetch(url)
	  .then(response => response.json())
	  .then(data => exibirImagem(data));
}
function exibirImagem(data){
	document.getElementById("imagem_api").src = data.sprites.front_default;
	// document.getElementById("imagem_back").src = data.sprites.back_default;
	document.getElementById("nome_pokemon").innerHTML = data.name;

  if(data.types[0].type.name === data.types[1].type.name) {
	document.getElementById("tipo").innerHTML ="Type: " + data.types[0].type.name;
  } else {
    document.getElementById("tipo").innerHTML = "Tipo: " + data.types[0].type.name + "  |  " + data.types[1].type.name;
  }

  document.getElementById("des1").innerHTML = ""
  if(data.moves.length > 0) {
    
  for (var i = 0; i < 5; i++) {
    document.getElementById("des1").innerHTML = document.getElementById("des1").innerHTML + data.moves[i].move.name + ", "
    console.log(data.moves[i].move.name)
   }
  }
document.getElementById("des2").innerHTML = "<b>Experiência Base: </b>" + data.base_experience;
document.getElementById("des2").innerHTML = "<b>Altura: </b>" + data.height + "dm";
document.getElementById("des3").innerHTML = "<b>Vida: </b>" + data.stats[0].base_stat + "hp";
document.getElementById("des4").innerHTML = "<b>Ataque: </b>" + data.stats[1].base_stat;
  
  
}

chamarApi()

