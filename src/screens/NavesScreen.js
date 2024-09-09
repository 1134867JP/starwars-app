import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import axios from "axios";

export default function NavesScreen({ route }) {
  const { personagem } = route.params;
  const [naves, setNaves] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchNaves() {
      try {
        const responses = await Promise.all(
          personagem.starships.map((url) => axios.get(url, { signal }))
        );
        setNaves(responses.map((response) => response.data));
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.error("Erro ao buscar as naves:", error);
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    }

    if (personagem.starships.length > 0) {
      fetchNaves();
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
      ) : error || naves.length === 0 ? (
        <Text style={styles.noNavesText}>
          {error
            ? "Erro ao carregar naves."
            : "Este personagem não possui naves."}
        </Text>
      ) : (
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
    marginBottom: 20,
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
