import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Filter from "../../../assets/appbar/Filter.png";
import Generation from "../../../assets/appbar/Generation.png";
import Sort from "../../../assets/appbar/Sort.png";


export function Header() {
  
  const pressHandler = () => {
    console.log("pressed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.touch_button} onPress={pressHandler}>
          <Image style={styles.image} source={Generation} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch_button}>
          <Image style={styles.image} source={Sort} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch_button}>
          <Image style={styles.image} source={Filter} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "10%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "25%",
    padding: "1%",
    marginRight: "2%",
  },
  image: {
    width: "100%",
  },
  touch_button: {
    width: "28%",
  },
});
