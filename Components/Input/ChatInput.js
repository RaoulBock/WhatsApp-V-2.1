import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const ChatInput = ({ placeholder }) => {
  return <TextInput placeholder={placeholder} style={styles.input} />;
};

export default ChatInput;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#eee",
    borderRadius: 50,
    padding: 10,
    marginHorizontal: 25,
    fontWeight: "500",
    color: "#404040",
    fontWeight: "500"
  }
});
