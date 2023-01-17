import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import React from "react";
import { AppContext } from "../../context/AppContext";
import HomeNav from "../Nav/HomeNav";
import { APP_ICONS, STATUS_USERS } from "../../context/settings";
import StatusCard from "../Card/StatusCard";
import ChatsView from "../Views/ChatsView";
import StatusView from "../Views/StatusView";
import BottomNav from "../Nav/BottomNav";
import ContactView from "../Views/ContactView";

const HomeScreen = () => {
  const { tab } = React.useContext(AppContext);
  return (
    <View style={styles.outline}>
      <View>
        <HomeNav
          name="Raoul Bock"
          number={"0812345678"}
          icon={APP_ICONS.SETTINGS}
          icon_add={APP_ICONS.DISCOVER}
        />
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          {tab === 0 && <ChatsView />}
          {tab === 1 && <StatusView />}
          {tab === 2 && <ContactView />}
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
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
