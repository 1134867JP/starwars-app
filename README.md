# Star Wars App

Este projeto é um aplicativo móvel desenvolvido com **React Native** e **Expo**, que consome dados da API pública de Star Wars (SWAPI). O aplicativo permite a navegação entre diferentes telas para visualizar informações sobre personagens, naves e filmes da saga Star Wars.

## Funcionalidades

### Lista de Personagens
Exibe uma lista de 5 personagens icônicos:
- Luke Skywalker
- Darth Vader
- Han Solo
- Yoda
- Chewbacca

Cada personagem pode ser clicado para acessar seus detalhes.

### Detalhes do Personagem
Mostra informações como:
- Nome
- Altura
- Peso
- Cor do cabelo
- Cor da pele
- Cor dos olhos
- Gênero

Inclui botões para visualizar as **naves** e **filmes** associados ao personagem.

### Lista de Naves
Exibe as naves associadas ao personagem selecionado, com informações sobre:
- Nome
- Modelo
- Capacidade de passageiros

### Lista de Filmes
Exibe os filmes em que o personagem aparece, com informações sobre:
- Título
- Diretor
- Data de lançamento

### Tela Sobre
Contém informações sobre os desenvolvedores do app:
- Nome
- RA
- E-mail

## Tecnologias Utilizadas
- **React Native** com **Expo**
- **Axios** para chamadas REST à API
- **React Navigation** para gerenciar a navegação entre telas

## Como Executar

1. Clone o repositório.
2. Instale as dependências com `npm install / npm install --force`.
3. Execute o aplicativo com `expo start`.

## Requisitos

- Node.js
- Expo

## Estrutura do Projeto

- Screens: Contém as telas do aplicativo (Personagens, Detalhes, Naves, Filmes, Sobre).
- Components: Componentes reutilizáveis.
- Services: Configuração de chamadas REST via Axios.

## Desenvolvedores

- **João Pedro Rodrigues** (RA: 1134867) - Email: 1134867@atitus.edu.br
- **Ricardo Groth da Silva** (RA: 1134872) - Email: 1134872@atitus.edu.br
- **Ricardo Basso Gunther** (RA: 1134953) - Email: 1134953@atitus.edu.br
