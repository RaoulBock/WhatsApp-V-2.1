import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import React from "react";
import { AppContext } from "../../context/AppContext";
import Nav from "../Nav/Nav";
import { APP_ICONS, MESSAGE_FROM, MESSAGE_TO } from "../../context/settings";
import ChatInput from "../Input/ChatInput";
import FromCard from "../Card/FromCard";
import ToCard from "../Card/ToCard";

const SpecChatScreen = () => {
  const { specChat: item } = React.useContext(AppContext);
  return (
    <View style={styles.outline}>
      <View>
        <Nav
          title={item.message_from}
          icon={APP_ICONS.BACK}
          icon_options={APP_ICONS.DOTS}
        />
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView>
          {MESSAGE_FROM.map((e, i) => {
            return <FromCard key={i} item={e} />;
          })}
          {MESSAGE_TO.map((e, i) => {
            return <ToCard key={i} item={e} />;
          })}
        </ScrollView>
      </View>
      <SafeAreaView>
        <KeyboardAvoidingView behavior={"padding"}>
          <ChatInput placeholder={"Type here ..."} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default SpecChatScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
