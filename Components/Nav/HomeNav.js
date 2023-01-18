import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_ICONS } from "../../context/settings";

const HomeNav = ({ name, number, icon, icon_add, img }) => {
  return (
    <View style={styles.outline}>
      <View style={styles.display}>
        {/* <Image source={{ uri: img }} style={styles.image} />
        <View style={{ paddingHorizontal: 10 }}>
          <Text style={[styles.text, styles.name]}>{name}</Text>
          <Text style={[styles.text, styles.number]}>{number}</Text>
        </View> */}
        <Text style={[styles.text, styles.name]}>WhatsApp</Text>
      </View>
      <View style={styles.grid}>
        <TouchableOpacity style={[styles.btn, {}]}>
          <Text>{icon}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>{icon_add}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeNav;

const styles = StyleSheet.create({
  outline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    elevation: 5,
    shadowColor: "#333",
    shadowOpacity: 1,
  },
  text: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 18,
  },
  name: {
    fontSize: 25,
    color: "#5f40a6",
  },
  number: {
    color: "#5f40a6",
    fontSize: 10,
    fontWeight: "500",
  },
  grid: {
    flexDirection: "row",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#9d79f44a",
    padding: 8,
    borderRadius: 50,
  },
  display: {
    flexDirection: "row",
    //alignItems: "center",
    //backgroundColor: "#9d79f44a",
    //padding: 7,
    //borderRadius: 14,
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
});

// 11007
