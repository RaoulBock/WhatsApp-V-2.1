import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const ContactCard = ({ item }) => {
  const name =
    item.name.length > 25 ? item.name.substring(0, 20) + "..." : item.name;
  return (
    <TouchableOpacity
      style={styles.outline}
      //   onPress={() => {
      //     setSpecChat(item);
      //     setNavPage(APP_PAGES.APP.SPEC_CHAT);
      //   }}
    >
      <View style={styles.grid}>
        {/* <Image source={{ uri: item.image }} style={styles.image} /> */}
        <View style={styles.slicer}>
          <Text style={styles.nameIndex}>{item.name.slice(0, 2)}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text>{item.phoneNumber}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ContactCard;

const styles = StyleSheet.create({
  outline: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  text: {
    color: "#404040",
    fontWeight: "500",
    fontSize: 18,
    paddingHorizontal: 10,
  },
  grid: {
    flexDirection: "row",
    alignItems: "center",
  },
  info: {
    paddingLeft: 10,
  },
  nameIndex: {
    color: "white",
    fontWeight: "500",
    textTransform: "uppercase",
  },
  slicer: {
    backgroundColor: "gray",
    borderRadius: 50,
    width: 40,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
