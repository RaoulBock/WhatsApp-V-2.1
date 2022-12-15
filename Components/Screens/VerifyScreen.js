import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  TextInput
} from "react-native";
import React from "react";
import Nav from "../Nav/Nav";
import { AppContext } from "../../context/AppContext";
import Button from "../Button/Button";
import { APP_PAGES } from "../../context/settings";

const VerifyScreen = () => {
  const { userLog, setNavPage, userInfo } = React.useContext(AppContext);
  const [verifyNumbers, setVerifyNumbers] = React.useState();

  const verify_code = () => {
    // if (userInfo.length === 0) {
    //   setNavPage(APP_PAGES.APP.SETTINGS);
    // } else {
    //   setNavPage(APP_PAGES.APP.HOME);
    // }

    setNavPage(APP_PAGES.APP.HOME);
  };

  return (
    <View style={styles.outline}>
      <Nav title={"Verify Account"} />
      <View style={{ flex: 1 }}>
        <Text style={[styles.text, styles.header]}>
          Mobile verification has Successfully done
        </Text>
        <Text style={[styles.text, styles.sub]}>
          We have send the top on {userLog.number} Will apply auto to the
          fields.
        </Text>

        <View style={styles.inputOtline}>
          <TextInput
            style={styles.input}
            keyboardType={"numeric"}
            maxLength={1}
          />
          <TextInput
            style={styles.input}
            keyboardType={"numeric"}
            maxLength={1}
          />
          <TextInput
            style={styles.input}
            keyboardType={"numeric"}
            maxLength={1}
          />
          <TextInput
            style={styles.input}
            keyboardType={"numeric"}
            maxLength={1}
          />
        </View>

        <Text style={[styles.text, styles.sub]}>
          If you didn't receive a code!{" "}
          <Text style={styles.resend}>Resend</Text>
        </Text>
      </View>
      <Button text={"Verify"} onPress={verify_code} />
    </View>
  );
};

export default VerifyScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  text: {
    paddingHorizontal: 20,
    textAlign: "center"
  },
  header: {
    color: "#404040",
    fontWeight: "500",
    fontSize: 25,
    marginTop: 30
  },
  sub: {
    marginTop: 20,
    color: "gray",
    fontSize: 18,
    paddingHorizontal: 30,
    fontWeight: "500"
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#404040",
    width: 60,
    textAlign: "center",
    fontWeight: "500",
    fontSize: 28
  },
  inputOtline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 40,
    marginTop: 70
  },
  resend: {
    color: "#eb4d4b"
  }
});
