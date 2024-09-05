// translations.js
import I18n from "i18n-js";

// Defina as traduções
I18n.translations = {
  en: {
    details: {
      hair_color: {
        blond: "Blond",
        brown: "Brown",
        black: "Black",
        red: "Red",
      },
      skin_color: {
        fair: "Fair",
        gold: "Gold",
        white: "White",
        blue: "Blue",
      },
      eye_color: {
        blue: "Blue",
        brown: "Brown",
        green: "Green",
        yellow: "Yellow",
      },
      gender: {
        male: "Male",
        female: "Female",
      },
      height: "Height",
      mass: "Mass",
      name: "Name",
      birth_year: "Birth Year",
      homeworld: "Homeworld",
      species: "Species",
      starships: "Starships",
      vehicles: "Vehicles",
      films: "Films",
    },
  },
  pt: {
    details: {
      hair_color: {
        blond: "Loiro",
        brown: "Castanho",
        black: "Preto",
        red: "Ruivo",
      },
      skin_color: {
        fair: "Clara",
        gold: "Dourada",
        white: "Branca",
        blue: "Azul",
      },
      eye_color: {
        blue: "Azul",
        brown: "Castanho",
        green: "Verde",
        yellow: "Amarelo",
      },
      gender: {
        male: "Masculino",
        female: "Feminino",
      },
      height: "Altura",
      mass: "Peso",
      name: "Nome",
      birth_year: "Ano de Nascimento",
      homeworld: "Planeta Natal",
      species: "Espécies",
      starships: "Naves Estelares",
      vehicles: "Veículos",
      films: "Filmes",
    },
  },
};

// Defina o idioma padrão
I18n.defaultLocale = "pt"; // Atualizado para defaultLocale
I18n.locale = "pt";

export default I18n;
