import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import React from "react";
import { CHATS_DEMO } from "../../context/settings";
import ChatsCard from "../Card/ChatsCard";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ChatsView = () => {
  return (
    <View style={styles.outline}>
      <Text style={styles.title}>Chats</Text>
      <ScrollView>
        {CHATS_DEMO.map((e, i) => {
          return <ChatsCard key={i} item={e} />;
        })}
      </ScrollView>
    </View>
  );
};

export default ChatsView;

const styles = StyleSheet.create({
  outline: {
    width: width,
    paddingHorizontal: 20
  },
  title: {
    color: "#404040",
    fontWeight: "500",
    fontSize: 30
  }
});
