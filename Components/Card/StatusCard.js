import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const StatusCard = ({ item }) => {
  return (
    <View style={styles.outline}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.text}>12:00am</Text>
      </View>
    </View>
  );
};

export default StatusCard;

const styles = StyleSheet.create({
  outline: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  text: {
    color: "#404040",
    fontWeight: "500",
    fontSize: 18,
    paddingHorizontal: 10,
  },
});
