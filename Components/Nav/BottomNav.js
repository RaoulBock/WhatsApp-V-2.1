import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_ICONS } from "../../context/settings";

const BottomNav = () => {
  const MENU = [
    {
      id: 1,
      name: "Home",
      icon: APP_ICONS.HOME
    },
    {
      id: 2,
      name: "Calls",
      icon: APP_ICONS.PHONE
    }
  ];

  return (
    <View style={styles.outline}>
      {MENU.map((e, i) => {
        return (
          <TouchableOpacity key={i}>
            <Text>{e.icon}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  outline: {
    backgroundColor: "#eee",
    width: 200,
    position: "absolute",
    bottom: "1%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    left: "25%",
    padding: 10,
    borderRadius: 50
  }
});
