import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const StatusCard = ({ item }) => {
  return (
    <View style={styles.outline}>
      <Image source={{ uri: item.image }} style={styles.image} />
    </View>
  );
};

export default StatusCard;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 50
  }
});
