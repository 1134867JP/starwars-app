import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  ActivityIndicator,
} from "react-native";

import axios from "axios";

const personagensIds = ["1", "4", "14", "20", "13"]; // IDs dos personagens

// URLs fictícias das imagens dos personagens
const personagensImagens = {
  1: "https://starwars-visualguide.com/assets/img/characters/1.jpg", // Luke Skywalker
  4: "https://starwars-visualguide.com/assets/img/characters/4.jpg", // Darth Vader
  14: "https://starwars-visualguide.com/assets/img/characters/14.jpg", // Han Solo
  20: "https://starwars-visualguide.com/assets/img/characters/20.jpg", // Yoda
  13: "https://starwars-visualguide.com/assets/img/characters/13.jpg", // Chewbacca
};

export default function PersonagensScreen({ navigation }) {
  const [personagens, setPersonagens] = useState([]);
  const [loading, setLoading] = useState(true); // Track the loading state

  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  useEffect(() => {
    async function fetchPersonagens() {
      try {
        const responses = await Promise.all(
          personagensIds.map((id) =>
            axios.get(`https://swapi.dev/api/people/${id}/`)
          )
        );
        setPersonagens(responses.map((response) => response.data));
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Erro ao buscar personagens:", error);
        setLoading(false); // Set loading to false in case of error
      }
    }
    fetchPersonagens();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? ( // Render the loading indicator if loading is true
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={personagens}
          numColumns={1} // Um card por linha
          keyExtractor={(item) => item.url} // Usar o URL como chave única
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.card,
                { width: screenWidth - 20, height: screenHeight / 2.5 },
              ]}
              onPress={() =>
                navigation.navigate("DetalhesPersonagem", { personagem: item })
              }
            >
              <Image
                source={{
                  uri: personagensImagens[
                    personagensIds[personagens.indexOf(item)]
                  ],
                }}
                style={[styles.image, { height: screenHeight / 3 }]}
              />
              <Text style={styles.name}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingVertical: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    margin: 10,
    alignItems: "center",
    elevation: 2, // Sombra para Android
    shadowColor: "#000", // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  image: {
    width: "100%",
    borderRadius: 8,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
