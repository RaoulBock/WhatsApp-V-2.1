import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const StatusCard = ({ item }) => {
  return (
    <View style={styles.outline}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );
};

export default StatusCard;

const styles = StyleSheet.create({
  outline: {
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: "center",
    backgroundColor: "red"
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50
  },
  text: {
    color: "#404040",
    fontWeight: "500",
    fontSize: 18,
    marginVertical: 10
  }
});
