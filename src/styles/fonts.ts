import { StyleSheet } from "react-native";
import colors from "./colors";

export const styles_global = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    color: colors.text_gray,
  },
});
