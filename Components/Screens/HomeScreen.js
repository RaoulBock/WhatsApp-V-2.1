import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  ScrollView,
  RefreshControl,
  Animated,
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

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const HomeScreen = () => {
  const { tab } = React.useContext(AppContext);
  const [refreshing, setRefreshing] = React.useState(false);
  const [scrollY, setScrollY] = React.useState(0);
  const [bottomNavAnim] = React.useState(new Animated.Value(1)); // Initial value of 1

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const handleScroll = (event) => {
    setScrollY(event.nativeEvent.contentOffset.y);
  };

  React.useEffect(() => {
    if (scrollY > 50) {
      Animated.timing(bottomNavAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(bottomNavAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }).start();
    }
  }, [scrollY]);

  return (
    <View style={styles.outline}>
      {/* <HomeNav
        name="Raoul Bock"
        number={"0812345678"}
        icon={APP_ICONS.SETTINGS}
        img={
          "https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg"
        }
      /> */}
      <ScrollView
        onScroll={handleScroll}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={{ flex: 1 }}>
          {tab === 0 && <ChatsView />}
          {tab === 1 && <StatusView />}
          {tab === 2 && <ContactView />}
        </View>
      </ScrollView>
      <Animated.View
        style={{
          opacity: bottomNavAnim,
          bottom: 0,
          left: 0,
          right: 0,
          position: "absolute",
        }}
      >
        <BottomNav />
      </Animated.View>
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
