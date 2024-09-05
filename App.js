import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PersonagensScreen from "./src/screens/PersonagensScreen";
import DetalhesPersonagemScreen from "./src/screens/DetalhesPersonagemScreen";
import NavesScreen from "./src/screens/NavesScreen";
import FilmesScreen from "./src/screens/FilmesScreen";
import SobreScreen from "./src/screens/SobreScreen";
import { TouchableOpacity, Text } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Personagens">
        <Stack.Screen
          name="Personagens"
          component={PersonagensScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Sobre")}
                style={{ marginRight: 10 }}
              >
                <Text style={{ fontSize: 20, color: "black" }}>ⓘ</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="DetalhesPersonagem"
          component={DetalhesPersonagemScreen}
          options={{ title: "Detalhes do Personagem" }}
        />
        <Stack.Screen name="Naves" component={NavesScreen} />
        <Stack.Screen name="Filmes" component={FilmesScreen} />
        <Stack.Screen name="Sobre" component={SobreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
