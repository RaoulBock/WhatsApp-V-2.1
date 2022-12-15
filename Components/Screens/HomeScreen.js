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
import StatusView from "../Views/StatusView";
import BottomNav from "../Nav/BottomNav";

const HomeScreen = () => {
  return (
    <View style={styles.outline}>
      <View>
        <HomeNav
          name="Raoul Bock"
          number={"0812345678"}
          icon={APP_ICONS.SEARCH}
          icon_add={APP_ICONS.PLUS}
        />
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          <ChatsView />
          <StatusView />
        </ScrollView>
      </View>
      <BottomNav />
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
