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
import { APP_ICONS, CHATS_DEMO, STATUS_USERS } from "../../context/settings";
import ChatsCard from "../Card/ChatsCard";
import SearchInput from "../Input/SearchInput";
import StatusCard from "../Card/StatusCard";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ChatsView = () => {
  return (
    <View style={styles.outline}>
      <View style={styles.grid}>
        <Text style={styles.title}>Chats</Text>
      </View>

      <View style={{ marginVertical: 10 }}>
        <SearchInput placeholder={"Search for chats"} />
        <View style={styles.gridStatus}>
          {STATUS_USERS.map((e, i) => {
            return <StatusCard key={i} item={e} />;
          })}
        </View>
        <Text style={styles.count}>{CHATS_DEMO.length} Chats</Text>
      </View>
      {CHATS_DEMO.map((e, i) => {
        return <ChatsCard key={i} item={e} />;
      })}
    </View>
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
    fontWeight: "400",
    color: "gray",
    textAlign: "right",
    fontSize: 12,
  },
  gridStatus: {
    flexDirection: "row",
    alignItems: "center",
  },
});
