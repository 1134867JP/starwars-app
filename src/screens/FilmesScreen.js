import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import axios from "axios";

export default function FilmesScreen({ route }) {
  const { personagem } = route.params;
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchFilmes() {
      try {
        const responses = await Promise.all(
          personagem.films.map((url) => axios.get(url, { signal }))
        );
        setFilmes(responses.map((response) => response.data));
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.error("Erro ao buscar os filmes:", error);
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    }

    if (personagem.films.length > 0) {
      fetchFilmes();
    } else {
      setLoading(false);
    }

    return () => {
      controller.abort(); // Cancela a solicitação se o componente for desmontado
    };
  }, [personagem]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={styles.noFilmesText}>Erro ao carregar filmes.</Text>
      ) : filmes.length > 0 ? (
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
                  Data de Lançamento: <Text style={styles.value}></Text>
                  {new Date(item.release_date).toLocaleDateString("pt-BR")}
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
