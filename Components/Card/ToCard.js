import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ToCard = ({ item }) => {
  return (
    <View style={styles.outline}>
      <Text style={styles.message}>{item.message}</Text>
      <Image source={{ uri: item.image }} style={styles.image} />
    </View>
  );
};

export default ToCard;

const styles = StyleSheet.create({
  outline: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 10
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50
  },
  message: {
    width: windowWidth / 1.5,
    marginHorizontal: 10,
    backgroundColor: "#eee",
    borderRadius: 10,
    padding: 10,
    fontWeight: "500",
    color: "#404040"
  }
});
