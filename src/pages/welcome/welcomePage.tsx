import React from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import colors from "../../styles/colors";
import LottieView from "lottie-react-native";
import pokemonAnimation from "./pokemon.json";
import { Button } from "../../components/button/button";

export function WelcomePage() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <LottieView
          source={pokemonAnimation}
          autoPlay
          loop
          style={styles.lottie}
        />
        <Text style={styles.title}>Bem vindo</Text>
        <Text style={styles.subtitle}>
          Encontre todos os pokémons em um só lugar
        </Text>
      </View>
      <View style={styles.footer}>
        <Button title={"Iniciar"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.types.water,
  },
  content: {
    height: "70%",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    height: "30%",
    backgroundColor: colors.backgound.background_white,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  lottie: {
    width: 200,
    height: 300,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 20,
    color: colors.text.text_white,
  },
  subtitle: {
    fontSize: 16,
    marginTop: 20,
    color: colors.text.text_white,
  },
});
