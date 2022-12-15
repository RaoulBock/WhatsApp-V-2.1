import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AppContext } from "../../context/AppContext";
import { APP_ICONS, APP_PAGES } from "../../context/settings";

const Nav = ({ title, icon, icon_options }) => {
  const { setNavPage } = React.useContext(AppContext);
  return (
    <View style={styles.outline}>
      <TouchableOpacity
        onPress={() => setNavPage(APP_PAGES.APP.HOME)}
        style={styles.btn}
      >
        <Text>{icon}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.btn}>
        <Text>{icon_options}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({
  outline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10
    // borderBottomWidth: 1,
    // borderBottomColor: "#eee"
  },
  title: {
    color: "#404040",
    fontSize: 18,
    fontWeight: "500"
  },
  btn: {
    backgroundColor: "#21d37c",
    padding: 5,
    borderRadius: 50
  }
});
