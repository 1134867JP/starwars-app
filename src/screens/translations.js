import I18n from "i18n-js";

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
      starships: "Starships",
      vehicles: "Vehicles",
      films: "Films",
    },
  },
  pt: {
    details: {
      hair_color: {
        none: "Nenhum",
        blond: "Loiro",
        brown: "Castanho",
        white: "Branco",
        black: "Preto",
        red: "Ruivo",
      },
      skin_color: {
        fair: "Clara",
        gold: "Dourada",
        white: "Branca",
        green: "Verde",
        blue: "Azul",
        unknown: "Desconhecida",
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
      starships: "Naves",
      vehicles: "Veículos",
      films: "Filmes",
    },
  },
};

I18n.defaultLocale = "pt";
I18n.locale = "pt";

export default I18n;
