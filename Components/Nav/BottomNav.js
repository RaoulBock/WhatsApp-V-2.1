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
      name: "Notification",
      icon: APP_ICONS.NOTIFICATION
    },
    {
      id: 3,
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingVertical: 10
  }
});
