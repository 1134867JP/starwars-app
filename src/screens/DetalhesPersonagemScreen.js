import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import I18n from "./translations"; // Importe o arquivo de traduções

export default function DetalhesPersonagemScreen({ route, navigation }) {
  const { personagem } = route.params;

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
        <Text style={styles.value}>
          {I18n.t("details.hair_color")[personagem.hair_color] ||
            personagem.hair_color}
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Cor da pele:</Text>
        <Text style={styles.value}>
          {I18n.t("details.skin_color")[personagem.skin_color] ||
            personagem.skin_color}
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Cor dos olhos:</Text>
        <Text style={styles.value}>
          {I18n.t("details.eye_color")[personagem.eye_color] ||
            personagem.eye_color}
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Gênero:</Text>
        <Text style={styles.value}>
          {I18n.t("details.gender")[personagem.gender] || personagem.gender}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.starshipsButton]}
          onPress={() => navigation.navigate("Naves", { personagem })}
        >
          <Text style={styles.buttonText}>{I18n.t("details.starships")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.filmsButton]}
          onPress={() => navigation.navigate("Filmes", { personagem })}
        >
          <Text style={styles.buttonText}>{I18n.t("details.films")}</Text>
        </TouchableOpacity>
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
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    width: "45%",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  starshipsButton: {
    backgroundColor: "#007BFF",
  },
  filmsButton: {
    backgroundColor: "#28a745",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
