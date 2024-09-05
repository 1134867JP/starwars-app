import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import axios from "axios";

export default function FilmesScreen({ route }) {
  const { personagem } = route.params;
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function fetchFilmes() {
      const responses = await Promise.all(
        personagem.films.map((url) => axios.get(url))
      );
      setFilmes(responses.map((response) => response.data));
    }

    if (personagem.films.length > 0) {
      fetchFilmes();
    }
  }, [personagem]);

  return (
    <View style={styles.container}>
      {filmes.length > 0 ? (
        <FlatList
          data={filmes}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.label}>
                  Diretor: <Text style={styles.value}>{item.director}</Text>
                </Text>
                <Text style={styles.label}>
                  Data de Lançamento:{" "}
                  <Text style={styles.value}>{item.release_date}</Text>
                </Text>
              </View>
            </View>
          )}
        />
      ) : (
        <Text style={styles.noFilmesText}>
          Não há filmes disponíveis para este personagem.
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
  textContainer: {
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
  noFilmesText: {
    fontSize: 18,
    color: "#6c757d",
    textAlign: "center",
  },
});
