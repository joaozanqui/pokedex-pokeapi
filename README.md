# Pokedex - Projeto Fullstack

Este projeto é uma Pokedex feita utilizando React para o frontend e Node.js para o backend. Os dados dos Pokémons são obtidos e organizados a partir da API PokeAPI.

## Visão Geral

### Frontend

O frontend foi desenvolvido utilizando React e Bootstrap para a estilização. Ele permite ao usuário selecionar um Pokémon, ou pesquisar pelo nome para visualizar suas informações. Além disso, é possível comparar os atributos de base de dois Pokémons.

### Backend

O backend foi construído usando Node.js e Express. Ele se conecta à PokeAPI para buscar e organizar os dados dos Pokémons, servindo esses dados para o frontend.

### PokeAPI

A [PokeAPI](https://pokeapi.co/) é uma API pública que fornece informações detalhadas sobre os Pokémons. Ela inclui dados como nome, altura, peso, habilidades, tipos e atributos de base de cada Pokémon.

## Funcionalidades

- **Listar Pokémons**: Exibe uma lista dos primeiros 151 Pokémons.
- **Pesquisar Pokémon**: Permite pesquisar por um Pokémon específico pelo nome.
- **Visualizar Informações**: Mostra informações detalhadas de um Pokémon selecionado.
- **Comparar Atributos de Base**: Compara os atributos de base de dois Pokémons selecionados.

### Como Utilizar

1. **Listar Pokémons**: Navegue pela lista de Pokémons na página inicial.
2. **Pesquisar Pokémon**: Use a barra de pesquisa para encontrar um Pokémon pelo nome.
3. **Visualizar Informações**: Clique em um Pokémon na lista ou nos resultados da pesquisa para ver suas informações detalhadas.
4. **Comparar Atributos de Base**: Clique no botão "Comparar Atributos de Base" no card do Pokémon e, em seguida, selecione outro Pokémon para comparação.

### Acesso Online

O projeto foi hospedado na plataforma [Render](https://render.com/). Você pode acessar o projeto online através do link abaixo:

- **Pokedex (Frontend)**: [https://pokedex-pokeapi-client.onrender.com/](https://pokedex-pokeapi-client.onrender.com/)

A API criada com Node.js para fornecer os dados dos Pokémons ao frontend também foi hospedada no Render. Acesse a API através do link:

- **API Backend**: [https://pokedex-pokeapi-server.onrender.com/api](https://pokedex-pokeapi-server.onrender.com/api)

A API está configurada para fornecer os dados dos Pokémons retirados da [PokeAPI](https://pokeapi.co/), que são utilizados pelo frontend para exibir e comparar as informações.

### Instalação Local

Para executar este projeto localmente, siga os passos abaixo:

1. Clone o repositório do projeto:
   ```bash
   git clone https://github.com/joaozanqui/pokedex-pokeapi.git

2. Altere o proxy no arquivo package.json da pasta client:

  - Abra o arquivo client/package.json
  - Encontre a linha que contém:
    ``` bash
    "proxy": "https://pokedex-pokeapi-server.onrender.com"
  - Altere para:
    ```bash
    "proxy": "http://localhost:3333"
  - Salve as alterações.
3. Acesse a pasta server pelo terminal e inicie o servidor:
    ```bash
    cd server
    npm start
4. Em outro terminal, acesse a pasta client e inicie o aplicativo React:
    ```bash
    npm start

5. Abra o navegador e vá para http://localhost:3000 para visualizar o projeto. O servidor backend estará rodando em http://localhost:3333.
