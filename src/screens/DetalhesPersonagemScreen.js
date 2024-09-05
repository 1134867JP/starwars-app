import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
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
        <Text style={styles.label}>
          {I18n.t("details.hair_color")[personagem.hair_color]}:
        </Text>
        <Text style={styles.value}>{personagem.hair_color}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>
          {I18n.t("details.skin_color")[personagem.skin_color]}:
        </Text>
        <Text style={styles.value}>{personagem.skin_color}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>
          {I18n.t("details.eye_color")[personagem.eye_color]}:
        </Text>
        <Text style={styles.value}>{personagem.eye_color}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>
          {I18n.t("details.gender")[personagem.gender]}:
        </Text>
        <Text style={styles.value}>{personagem.gender}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>{I18n.t("details.birth_year")}:</Text>
        <Text style={styles.value}>{personagem.birth_year}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>{I18n.t("details.homeworld")}:</Text>
        <Text style={styles.value}>{personagem.homeworld}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>{I18n.t("details.species")}:</Text>
        <Text style={styles.value}>{personagem.species.join(", ")}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>{I18n.t("details.starships")}:</Text>
        <Text style={styles.value}>{personagem.starships.join(", ")}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>{I18n.t("details.vehicles")}:</Text>
        <Text style={styles.value}>{personagem.vehicles.join(", ")}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>{I18n.t("details.films")}:</Text>
        <Text style={styles.value}>{personagem.films.join(", ")}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={I18n.t("common.back")}
          onPress={() => navigation.goBack()}
          color="#007BFF"
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
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
  },
});
