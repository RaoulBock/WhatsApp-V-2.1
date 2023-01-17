import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_ICONS } from "../../context/settings";

const HomeNav = ({ name, number, icon, icon_add, img }) => {
  return (
    <View style={styles.outline}>
      <View style={styles.display}>
        <Image source={{ uri: img }} style={styles.image} />
        <View style={{ paddingHorizontal: 10 }}>
          <Text style={[styles.text, styles.name]}>{name}</Text>
          <Text style={[styles.text, styles.number]}>{number}</Text>
        </View>
      </View>
      <View style={styles.grid}>
        <TouchableOpacity style={[styles.btn, { marginHorizontal: 10 }]}>
          <Text>{icon}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
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
    backgroundColor: "#5f40a6",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    elevation: 10,
    shadowColor: "#333",
    shadowOpacity: 1,
  },
  text: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 18,
  },
  name: {
    fontSize: 20,
  },
  number: {
    color: "#fafafa",
    fontSize: 13,
    fontWeight: "400",
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
    alignItems: "center",
    backgroundColor: "#9d79f44a",
    padding: 7,
    borderRadius: 14,
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
});

// 11007
