import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  RefreshControl,
} from "react-native";
import React from "react";
import { STATUS_USERS } from "../../context/settings";
import StatusCard from "../Card/StatusCard";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const StatusView = () => {
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
        <Text style={styles.title}>Status</Text>
      </View>
      {/* <View style={{ marginVertical: 10 }}>
        <SearchInput placeholder={"Search for chats"} />
      </View> */}
      {STATUS_USERS.map((e, i) => {
        return <StatusCard key={i} item={e} />;
      })}
    </ScrollView>
  );
};

export default StatusView;

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
});
