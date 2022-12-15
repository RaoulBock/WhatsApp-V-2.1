import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import React from "react";
import { AppContext } from "../../context/AppContext";
import HomeNav from "../Nav/HomeNav";
import { APP_ICONS } from "../../context/settings";

const HomeScreen = () => {
  return (
    <View style={styles.outline}>
      <HomeNav
        name="Raoul Bock"
        number={"0812345678"}
        icon={APP_ICONS.SEARCH}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});
