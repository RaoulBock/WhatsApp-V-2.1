import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BottomNav = () => {
  return (
    <View style={styles.outline}>
      <Text>BottomNav</Text>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  outline: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: "gray"
  }
});
