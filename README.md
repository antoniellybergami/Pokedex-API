# CRIAÇÃO DE API PARA OBTER DADOS SOBRE POKEMONS

### Para rodar, basta utilizar o comando `NODE SERVER.JS`
Isso permitirá que a api rode em http://localhost:3000/

Com isso, você pode utilizar os seguinter endpoints:
#### Método Get
* `'/api/v1/pokemon'` -> Que irá retornar uma lista com o nome de todos os pokemons;
* `'/api/v1/pokemon/:nomePokemon'` -> Que irá retornar os dados de um pokemon especificado na requisição;
* `'/api/v1/pokemon/tipo/:tipoPokemon'` -> Que irá retornar os pokemons que possuem um tipo especificado na requisição;

#### Método Post
* `'/api/v1/advantage/:nomePokemon'` -> Que irá retornar os pokemons que são fracos contra o pokemons informado.
