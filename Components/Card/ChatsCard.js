import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AppContext } from "../../context/AppContext";
import { APP_PAGES } from "../../context/settings";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ChatsCard = ({ item }) => {
  const { setSpecChat, setNavPage } = React.useContext(AppContext);

  return (
    <TouchableOpacity
      style={styles.outline}
      onPress={() => {
        setSpecChat(item);
        setNavPage(APP_PAGES.APP.SPEC_CHAT);
      }}
    >
      <View style={styles.grid}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.info}>
          <View style={styles.grid}>
            <Text style={styles.name}>{item.message_from}</Text>
            <Text style={styles.time}>12:00am</Text>
            <Text style={item.active ? styles.active : styles.dot}>•</Text>
            <Text style={styles.activeText}>{item.active ? "Active" : ""}</Text>
          </View>
          <Text style={{ width: width, color: "#404040", fontSize: 12 }}>
            {item.short_message.substring(0, 100)}
            {item.short_message.length >= 20 && "..."}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatsCard;

const styles = StyleSheet.create({
  outline: {
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  grid: {
    flexDirection: "row",
    alignItems: "center",
  },
  info: {
    paddingHorizontal: 10,
  },
  name: {
    color: "#404040",
    fontWeight: "400",
    fontSize: 18,
  },
  time: {
    color: "gray",
    fontWeight: "500",
    paddingHorizontal: 10,
    fontSize: 10,
  },
  active: {
    color: "green",
    fontWeight: "700",
    fontSize: 28,
  },
  dot: {
    color: "gray",
    fontWeight: "700",
    fontSize: 28,
  },
  activeText: {
    fontWeight: "500",
    paddingHorizontal: 10,
  },
});
