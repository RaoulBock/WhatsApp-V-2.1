import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.outline} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  outline: {
    backgroundColor: "#eb4d4b",
    padding: 15,
  },
  text: {
    color: "#fff",
    fontWeight: "500",
    textAlign: "center",
  },
});
