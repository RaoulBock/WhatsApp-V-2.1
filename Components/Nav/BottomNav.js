import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_ICONS } from "../../context/settings";
import { AppContext } from "../../context/AppContext";

const BottomNav = () => {
  const { tab, setTab } = React.useContext(AppContext);
  const MENU = [
    {
      id: 0,
      name: "Chats",
      icon: APP_ICONS.HOME,
      onPress: () => setTab(0),
    },
    // {
    //   id: 1,
    //   name: "Status",
    //   icon: APP_ICONS.NOTIFICATION,
    //   onPress: () => setTab(1),
    // },
    {
      id: 2,
      name: "Calls",
      icon: APP_ICONS.PHONE,
      onPress: () => setTab(2),
    },
    {
      id: 3,
      name: "Discover",
      icon: APP_ICONS.DISCOVER,
      onPress: () => setTab(3),
    },
  ];

  return (
    <View style={styles.outline}>
      {MENU.map((e, i) => {
        return (
          <TouchableOpacity style={styles.grid} key={i} onPress={e.onPress}>
            <Text>{e.icon}</Text>
            <Text style={styles.name}>{e.name}</Text>
            <Text style={tab === e.id ? styles.active : styles.btn}>{"•"}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  outline: {
    backgroundColor: "#5f40a6",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 10,
  },
  btn: {
    color: "transparent",
    textAlign: "center",
    fontSize: 25,
  },
  name: {
    fontWeight: "500",
    color: "#fff",
    paddingHorizontal: 8,
  },
  active: {
    color: "#9d79f4",
    textAlign: "center",
    fontSize: 25,
  },
  grid: {
    flexDirection: "row",
    alignItems: "center",
  },
});
