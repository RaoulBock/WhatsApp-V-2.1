import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_ICONS } from "../../context/settings";

const BottomNav = () => {
  const MENU = [
    {
      id: 1,
      name: "Chats",
      icon: APP_ICONS.HOME,
    },
    {
      id: 2,
      name: "Status",
      icon: APP_ICONS.NOTIFICATION,
    },
    {
      id: 3,
      name: "Contact",
      icon: APP_ICONS.PHONE,
    },
  ];

  return (
    <View style={styles.outline}>
      {MENU.map((e, i) => {
        return (
          <TouchableOpacity style={styles.btn} key={i}>
            {/* <Text>{e.icon}</Text> */}
            <Text style={styles.name}>{e.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  outline: {
    backgroundColor: "#fafafa",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 10,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontWeight: "500",
    color: "#404040",
    paddingHorizontal: 8,
  },
});
