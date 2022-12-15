import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const Input = ({ placeholder, onChangeText, keyboardType }) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      style={styles.default}
      keyboardType={keyboardType}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  default: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    fontWeight: "500",
    color: "gray",
    fontSize: 20,
    textAlign: "center",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "gray",
  },
});
