import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const ChatInput = ({ placeholder }) => {
  return <TextInput placeholder={placeholder} style={styles.input} />;
};

export default ChatInput;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#eee",
    padding: 10,
    fontWeight: "500",
    color: "#404040",
    fontWeight: "500",
  },
});
