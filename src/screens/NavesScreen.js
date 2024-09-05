import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import axios from "axios";

export default function NavesScreen({ route }) {
  const { personagem } = route.params;
  const [naves, setNaves] = useState([]);

  // Mapeamento de naves para imagens (adicione mais conforme necessário)
  const navesImages = {
    "Millennium Falcon":
      "https://starwars-visualguide.com/assets/img/starships/10.jpg",
    "X-wing": "https://starwars-visualguide.com/assets/img/starships/12.jpg",
    "TIE Advanced x1":
      "https://starwars-visualguide.com/assets/img/starships/13.jpg",
    "Imperial shuttle":
      "https://starwars-visualguide.com/assets/img/starships/22.jpg",
  };

  useEffect(() => {
    async function fetchNaves() {
      const responses = await Promise.all(
        personagem.starships.map((url) => axios.get(url))
      );
      setNaves(responses.map((response) => response.data));
    }

    if (personagem.starships.length > 0) {
      fetchNaves();
    }
  }, [personagem]);

  return (
    <View style={styles.container}>
      {naves.length > 0 ? (
        <FlatList
          data={naves}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image
                source={{
                  uri:
                    navesImages[item.name] ||
                    "https://starwars-visualguide.com/assets/img/starships/placeholder.jpg",
                }}
                style={styles.image}
              />
              <View style={styles.infoContainer}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.label}>
                  Modelo: <Text style={styles.value}>{item.model}</Text>
                </Text>
                <Text style={styles.label}>
                  Passageiros:{" "}
                  <Text style={styles.value}>{item.passengers}</Text>
                </Text>
              </View>
            </View>
          )}
        />
      ) : (
        <Text style={styles.noNavesText}>
          Não há naves disponíveis para este personagem.
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 200,
  },
  infoContainer: {
    padding: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#343a40",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: "#495057",
    fontWeight: "500",
    marginBottom: 5,
  },
  value: {
    fontWeight: "400",
    color: "#212529",
  },
  noNavesText: {
    fontSize: 18,
    color: "#6c757d",
    textAlign: "center",
  },
});
