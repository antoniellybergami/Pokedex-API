const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const data = require('./src/pokedex.json')

app.use(express.json());

//retorna nome de todos os pokemons 
app.get('/api/v1/pokemon', function(req, res){
    const pokeNomes = data.pokemon.map(pokemon => pokemon.name) //faz um map na propriedade pokemon no arquivo data
    //pokeNomes.sort(); ordem alfabetica
    res.json(pokeNomes)
})

//retorna dados de um pokemon especifico
app.get('/api/v1/pokemon/:nomePokemon', function(req, res){
    const { nomePokemon } = req.params;

    const poke = data.pokemon.find(poke => poke.name.toLowerCase() === nomePokemon.toLowerCase())

    if (!poke) return res.status(404).json({error: 'Pokémon não encontrado 1'});
    res.json(poke);
   
})

//retorna  os pokemons de um tipo especifico
app.get('/api/v1/pokemon/tipo/:tipoPokemon', function(req, res){
    const { tipoPokemon } = req.params;

    const pokemons = data.pokemon.filter(poke => poke.type.map(t => t.toLowerCase()).includes(tipoPokemon.toLowerCase()));
    
    if (pokemons.length == 0) return res.status(404).json({error: 'Tipo não encontrado'});
    res.json(pokemons);


})

/*//retorna a lista dos pokémons que são fracos contra o pokémon informado
app.get('/api/v1/advantage/:nomePokemon', function(req, res){
    const { nomePokemon } = req.params;

    //Pega o pokemon 
    const pokemon = data.pokemon.find(poke => poke.name.toLowerCase() === nomePokemon.toLowerCase())

    if (!pokemon) {
        return res.status(404).json({ error: 'Pokémon não encontrado' });
    }

    const pokeTipo = pokemon.type; //pega o tipo dele

    const fracos = data.pokemon.filter(poke => poke.weaknesses.some(weaken => pokeTipo.includes(weaken)));
    res.json(fracos)
  
})*/


//retorna a lista de pokemons que são fracos contra o pokemon informado 
app.post('/api/v1/advantage/:nomePokemon', function(req, res) {
    //pega o pokemon
    const { nomePokemon } = req.params;
  
    //Pega o pokemon no json
    const pokemon = data.pokemon.find(poke => poke.name.toLowerCase() === nomePokemon.toLowerCase());

    if (!pokemon) {
        return res.status(404).json({ error: 'Pokémon não encontrado 2' });
    }

    const tipo  = pokemon.type;

    const fracos = data.pokemon.filter( poke => poke.weaknesses.some(weaken => tipo.includes(weaken)));

    //const pokeNomes = fracos.map(pokemon => pokemon.name)  - para retornar apenas o nome dos pokemons

    res.json(fracos);
})




app.listen(3000, function(){
    console.log("ok")
})