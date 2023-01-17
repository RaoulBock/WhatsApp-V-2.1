import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import React from "react";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ContactView = () => {
  return (
    <View style={styles.outline}>
      <Text style={styles.title}>Contacts</Text>
      <ScrollView></ScrollView>
    </View>
  );
};

export default ContactView;

const styles = StyleSheet.create({
  outline: {
    width: width,
    paddingHorizontal: 10,
  },
  title: {
    color: "#404040",
    fontWeight: "500",
    fontSize: 30,
  },
});
