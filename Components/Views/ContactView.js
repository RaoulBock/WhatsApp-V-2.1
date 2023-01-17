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

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ContactView = () => {
  const { contacts, isLoading, setIsLoading } = React.useContext(AppContext);
  return (
    <View style={styles.outline}>
      <Text style={styles.title}>Contacts</Text>
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
});
