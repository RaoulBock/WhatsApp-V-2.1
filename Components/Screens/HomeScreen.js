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
          img={
            "https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg"
          }
        />
      </View>
      <ScrollView>
        <View style={{}}>
          <View style={styles.grid}>
            {STATUS_USERS.map((e, i) => {
              return <StatusCard key={i} item={e} />;
            })}
          </View>
        </View>
        <View style={{ flex: 1 }}>
          {tab === 0 && <ChatsView />}
          {tab === 1 && <StatusView />}
          {tab === 2 && <ContactView />}
        </View>
      </ScrollView>
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
  grid: {
    flexDirection: "row",
    marginHorizontal: 10,
  },
  title: {
    color: "#404040",
    fontWeight: "500",
    fontSize: 20,
    marginHorizontal: 10,
  },
});
