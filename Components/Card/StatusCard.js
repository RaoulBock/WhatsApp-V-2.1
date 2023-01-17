import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const StatusCard = ({ item }) => {
  return (
    <View style={styles.outline}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View>
        <Text style={styles.text}>
          {item.name.substring(0, 10)}
          {item.name.length >= 10 && "..."}
        </Text>

        <Text style={styles.text}>12:00am</Text>
      </View>
    </View>
  );
};

export default StatusCard;

const styles = StyleSheet.create({
  outline: {
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  text: {
    color: "#404040",
    fontWeight: "400",
    fontSize: 15,
    paddingHorizontal: 10,
  },
});
