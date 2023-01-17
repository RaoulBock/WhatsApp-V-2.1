import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { APP_ICONS } from "../../context/settings";

const SearchInput = ({ placeholder, value, multiline, onChangeText }) => {
  return (
    <View style={styles.outline}>
      <Text>{APP_ICONS.SEARCH}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        multiline={multiline}
        style={styles.input}
        onChangeText={onChangeText}
        placeholderTextColor={"#5f40a6"}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  outline: {
    backgroundColor: "#9d79f44a",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  input: {
    backgroundColor: "transparent",
    width: "100%",
    fontWeight: "500",
    color: "#404040",
    paddingHorizontal: 5,
  },
});
