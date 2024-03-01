import React, { useEffect, useState } from "react";
import { Text, StyleSheet, SafeAreaView, View } from "react-native";
import { Header } from "../../components/header/header";
import { styles_global } from "../../styles/fonts";
import api from "../../service/api";

type PokemonType = {
  type: string;
};

type Pokemon = {
  name: string;
  url: string;
  id: number;
  types: PokemonType[];
};

type Request = {
  id: number;
  types: PokemonType[];
};
export function HomePage() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function getAllPokemons() {
      const response = await api.get("/pokemon");
      const { results } = response.data;

      const payloadPokemons = await Promise.all(
        results.map(async (pokemon: Pokemon) => {
          const { id, types } = await getMoreInfo(pokemon.url);

          return {
            name: pokemon.name,
            id,
            types,
          };
        })
      );
      setPokemons(payloadPokemons);
      console.log(payloadPokemons);
    }
    getAllPokemons();
  }, []);

  async function getMoreInfo(url: string): Promise<Request> {
    const response = await api.get(url);
    const { id, types } = response.data;
    return { id, types };
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View>
        <Text style={styles_global.title}>Pokédex</Text>
        <Text style={styles_global.description}>
          Search for Pokémon by name or using the National Pokédex number.
        </Text>
        {pokemons.map((item) => (
          <Text>{item.name}</Text>
        ))}
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
