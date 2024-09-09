import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import axios from "axios";
import I18n from "./translations"; // Importe o arquivo de traduções

export default function DetalhesPersonagemScreen({ route, navigation }) {
  const { personagem } = route.params;
  const [homeworldName, setHomeworldName] = useState("");
  const [speciesNames, setSpeciesNames] = useState([]);

  useEffect(() => {
    async function fetchHomeworld() {
      try {
        const response = await axios.get(personagem.homeworld);
        setHomeworldName(response.data.name); // Supondo que o nome do planeta está na propriedade 'name'
      } catch (error) {
        console.error("Erro ao buscar planeta:", error);
        setHomeworldName("Desconhecido"); // Valor padrão em caso de erro
      }
    }

    if (personagem.homeworld) {
      fetchHomeworld();
    }
  }, [personagem.homeworld]);

  useEffect(() => {
    async function fetchSpecies() {
      try {
        // Mapeia as URLs das espécies para uma lista de promessas
        const responses = await Promise.all(
          personagem.species.map((url) => axios.get(url))
        );
        // Extrai os nomes das espécies das respostas
        const names = responses.map((response) => response.data.name);
        setSpeciesNames(names); // Atualiza o estado com os nomes das espécies
      } catch (error) {
        console.error("Erro ao buscar espécies:", error);
        setSpeciesNames(["Desconhecido"]); // Valor padrão em caso de erro
      }
    }

    if (personagem.species && personagem.species.length > 0) {
      fetchSpecies();
    }
  }, [personagem.species]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {I18n.t("details.name")}: {personagem.name}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>{I18n.t("details.height")}:</Text>
        <Text style={styles.value}>{personagem.height} cm</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>{I18n.t("details.mass")}:</Text>
        <Text style={styles.value}>{personagem.mass} kg</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Cor do cabelo:</Text>
        <Text style={styles.label}>{I18n.t("details.hair_color")[personagem.hair_color]}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Cor da pele:</Text>
        <Text style={styles.label}>{I18n.t("details.skin_color")[personagem.skin_color]}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Cor dos olhos:</Text>
        <Text style={styles.label}>{I18n.t("details.eye_color")[personagem.eye_color]}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Gênero:</Text>
        <Text style={styles.label}>{I18n.t("details.gender")[personagem.gender]}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>{I18n.t("details.birth_year")}:</Text>
        <Text style={styles.value}>{personagem.birth_year}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>{I18n.t("details.homeworld")}:</Text>
        <Text style={styles.value}>{homeworldName || "Desconhecido"}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>{I18n.t("details.species")}:</Text>
        <Text style={styles.value}>{speciesNames.length > 0 ? speciesNames.join(", ") : "Desconhecido"}</Text>
    </View>
      <View style={styles.buttonContainer}>
        <Button
          title={I18n.t("details.starships")}
          onPress={() => navigation.navigate("Naves", { personagem })}
          color="#007BFF"
        />
        <Button
          title={I18n.t("details.films")}
          onPress={() => navigation.navigate("Filmes", { personagem })}
          color="#28a745"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#343a40",
    marginBottom: 20,
    textAlign: "center",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#dee2e6",
  },
  label: {
    fontSize: 18,
    color: "#495057",
    fontWeight: "500",
  },
  value: {
    fontSize: 18,
    color: "#212529",
    fontWeight: "400",
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "column",
    alignItems: "center",
  },
});
