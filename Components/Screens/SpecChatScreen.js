import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AppContext } from "../../context/AppContext";
import Nav from "../Nav/Nav";
import { APP_ICONS } from "../../context/settings";
import ChatInput from "../Input/ChatInput";

const SpecChatScreen = () => {
  const { specChat: item } = React.useContext(AppContext);
  return (
    <View>
      <View>
        <Nav
          title={item.message_from}
          icon={APP_ICONS.BACK}
          icon_options={APP_ICONS.DOTS}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text>hi</Text>
      </View>
      <ChatInput placeholder={"Type here ..."} />
    </View>
  );
};

export default SpecChatScreen;

const styles = StyleSheet.create({});
