import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Nav = ({ title, icon }) => {
  return (
    <View style={styles.outline}>
      <TouchableOpacity>
        <Text>{icon}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity>
        <Text>{}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({
  outline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  title: {
    color: "#b7b7b7",
    fontSize: 24,
    fontWeight: "500"
  }
});
