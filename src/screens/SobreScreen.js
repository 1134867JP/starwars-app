import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function SobreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Sobre o Desenvolvedor Projeto Acadêmico</Text>
      <View style={styles.card}>
        <View style={styles.infoContainer}>
          <MaterialIcons name="school" size={24} color="#6c757d" />
          <Text style={styles.label}>RA:</Text>
          <Text style={styles.value}>1134867</Text>
        </View>
        <View style={styles.infoContainer}>
          <MaterialIcons name="person" size={24} color="#6c757d" />
          <Text style={styles.label}>Nome Completo:</Text>
          <Text style={styles.value}>João Pedro Rodrigues</Text>
        </View>
        <View style={styles.infoContainer}>
          <MaterialIcons name="email" size={24} color="#6c757d" />
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>1134867@atitus.edu.com.br</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#343a40",
    textAlign: "center",
  },
  card: {
    width: "100%",
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    color: "#495057",
    marginLeft: 10,
    marginRight: 5,
  },
  value: {
    fontSize: 16,
    fontWeight: "400",
    color: "#212529",
  },
});
