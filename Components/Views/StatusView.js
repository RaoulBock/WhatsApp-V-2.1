import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import React from "react";
import { STATUS_USERS } from "../../context/settings";
import StatusCard from "../Card/StatusCard";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const StatusView = () => {
  return (
    <View style={styles.outline}>
      <Text style={styles.title}>Status</Text>
      <ScrollView>
        {STATUS_USERS.map((e, i) => {
          return <StatusCard key={i} item={e} />;
        })}
      </ScrollView>
    </View>
  );
};

export default StatusView;

const styles = StyleSheet.create({
  outline: {
    width: width,
    paddingHorizontal: 10
  },
  title: {
    color: "#404040",
    fontWeight: "500",
    fontSize: 30
  }
});
