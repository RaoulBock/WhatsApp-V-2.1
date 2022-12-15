import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AppContext } from "../../context/AppContext";
import Nav from "../Nav/Nav";
import { APP_ICONS } from "../../context/settings";

const SpecChatScreen = () => {
  const { specChat: item } = React.useContext(AppContext);
  return (
    <View>
      <Nav title={item.message_from} icon={APP_ICONS.BACK} />
    </View>
  );
};

export default SpecChatScreen;

const styles = StyleSheet.create({});
