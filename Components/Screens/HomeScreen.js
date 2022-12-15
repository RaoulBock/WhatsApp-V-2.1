import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  ScrollView
} from "react-native";
import React from "react";
import { AppContext } from "../../context/AppContext";
import HomeNav from "../Nav/HomeNav";
import { APP_ICONS, STATUS_USERS } from "../../context/settings";
import StatusCard from "../Card/StatusCard";
import ChatsView from "../Views/ChatsView";

const HomeScreen = () => {
  return (
    <View style={styles.outline}>
      <HomeNav
        name="Raoul Bock"
        number={"0812345678"}
        icon={APP_ICONS.SEARCH}
        icon_add={APP_ICONS.PLUS}
      />
      <ScrollView horizontal>
        {STATUS_USERS.map((e, i) => {
          return <StatusCard key={i} item={e} />;
        })}
      </ScrollView>
      <ScrollView horizontal>
        <ChatsView />
      </ScrollView>
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
