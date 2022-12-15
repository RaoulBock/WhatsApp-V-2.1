import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import React from "react";
import Nav from "../Nav/Nav";
import { APP_ICONS } from "../../context/settings";

const SettingsScreen = () => {
  return (
    <View style={styles.outline}>
      <Nav title={"Settings"} icon={APP_ICONS.BACK} />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
