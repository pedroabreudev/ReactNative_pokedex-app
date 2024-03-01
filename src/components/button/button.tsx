import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../styles/colors";

interface ButtonProps {
  title?: string;
}
export function Button({ title }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    backgroundColor: colors.types.water,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  title: {
    fontSize: 14,
    color: colors.text.text_white,
  },
});
