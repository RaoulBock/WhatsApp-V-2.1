import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { AppContext } from "../../context/AppContext";
import ContactCard from "../Card/ContactCard";
import SearchInput from "../Input/SearchInput";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ContactView = () => {
  const { contacts, isLoading, setIsLoading } = React.useContext(AppContext);
  return (
    <View style={styles.outline}>
      <View style={styles.grid}>
        <Text style={styles.title}>Contact</Text>
        <Text style={styles.count}>{contacts.length} Contacts</Text>
      </View>
      <View style={{ marginVertical: 10 }}>
        <SearchInput placeholder={"Search for chats"} />
      </View>
      <FlatList
        data={contacts}
        renderItem={({ item }) => <ContactCard item={item} />}
        keyExtractor={(item) => `${item.id}-${item.name}`}
        initialNumToRender={10}
        onEndReachedThreshold={0.5}
        maxToRenderPerBatch={10}
        onEndReached={() => {
          setIsLoading(true);
          // fetch more data
          setIsLoading(false);
        }}
        ListFooterComponent={
          isLoading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default ContactView;

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
