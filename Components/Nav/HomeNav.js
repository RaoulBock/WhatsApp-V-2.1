import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const HomeNav = ({ name, number, icon, icon_add }) => {
  return (
    <View style={styles.outline}>
      <View>
        <Text style={[styles.text, styles.name]}>{name}</Text>
        <Text style={[styles.text, styles.number]}>{number}</Text>
      </View>
      <View style={styles.grid}>
        <TouchableOpacity style={styles.btn}>
          <Text>{icon}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { paddingLeft: 20 }]}>
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
    marginHorizontal: 20
  },
  text: {
    color: "#404040",
    fontWeight: "500",
    fontSize: 18
  },
  name: {
    fontSize: 20
  },
  number: {
    color: "gray",
    fontSize: 15
  },
  grid: {
    flexDirection: "row",
    alignItems: "center"
  }
});

// 11007
