import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ChatsView = () => {
  return (
    <View style={styles.outline}>
      <Text style={styles.title}>Chats</Text>
    </View>
  );
};

export default ChatsView;

const styles = StyleSheet.create({
  outline: {
    width: width,
    paddingHorizontal: 20
  },
  title: {
    color: "#404040",
    fontWeight: "500",
    fontSize: 30
  }
});
