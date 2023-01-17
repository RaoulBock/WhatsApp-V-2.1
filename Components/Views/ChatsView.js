import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import React from "react";
import { APP_ICONS, CHATS_DEMO } from "../../context/settings";
import ChatsCard from "../Card/ChatsCard";
import SearchInput from "../Input/SearchInput";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const ChatsView = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <ScrollView
      style={styles.outline}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.grid}>
        <Text style={styles.title}>Chats</Text>
        <Text style={styles.count}>{CHATS_DEMO.length} Chats</Text>
      </View>
      <View style={{ marginVertical: 10 }}>
        <SearchInput placeholder={"Search for chats"} />
      </View>
      {CHATS_DEMO.map((e, i) => {
        return <ChatsCard key={i} item={e} />;
      })}
    </ScrollView>
  );
};

export default ChatsView;

const styles = StyleSheet.create({
  outline: {
    width: width,
    paddingHorizontal: 10,
  },
  title: {
    color: "#404040",
    fontWeight: "500",
    fontSize: 30,
  },
  grid: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  count: {
    fontWeight: "500",
    color: "#333",
  },
});
