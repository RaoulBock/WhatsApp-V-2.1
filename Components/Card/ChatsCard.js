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
          <Text style={styles.name}>{item.message_from}</Text>
          <Text style={{ width: width }}>
            {item.short_message.substring(0, 40)}
            {item.short_message.length >= 20 && "..."}
          </Text>
          <Text style={styles.time}>12:00am</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatsCard;

const styles = StyleSheet.create({
  outline: {
    marginVertical: 10,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  grid: {
    flexDirection: "row",
  },
  info: {
    paddingHorizontal: 10,
  },
  name: {
    color: "#404040",
    fontWeight: "500",
    fontSize: 18,
  },
  time: {
    color: "gray",
    fontWeight: "500",
  },
});
