import React from "react";
import { Text, StyleSheet, SafeAreaView, View } from "react-native";
import { Header } from "../../components/header/header";
import { styles_global } from "../../styles/fonts";

export function HomePage() {
  console.log(typeof styles_global); //
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View>
        <Text style={styles_global.title}>Pokédex</Text>
        <Text style={styles_global.description}>
          Search for Pokémon by name or using the National Pokédex number.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
