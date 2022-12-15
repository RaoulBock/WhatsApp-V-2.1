import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import React from "react";
import Nav from "../Nav/Nav";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { AppContext } from "../../context/AppContext";
import { APP_PAGES } from "../../context/settings";

const LoginScreen = () => {
  const {
    setNavPage,
    phoneNumber,
    setPhoneNumber,
    errorMsg,
    setErrorMsg,
    userLog,
    setUserLog,
  } = React.useContext(AppContext);

  const Login = () => {
    if (phoneNumber === "") {
      setErrorMsg("Please provide your mobile number to continue.");
    } else {
      setUserLog({ number: phoneNumber });

      console.log(userLog);
      setNavPage(APP_PAGES.APP.VERIFY);
      setErrorMsg("");
    }
  };

  return (
    <View style={styles.outline}>
      {/* <Nav title={"Create account"} /> */}
      <View style={{ flex: 1, marginVertical: 30 }}>
        {/* <View style={styles.imageoutline}>
          <Image
            source={require("../../assets/dt_logo.png")}
            style={styles.image}
          />
        </View> */}
        <Text style={[styles.text, styles.header]}>
          Enter your mobile number to create account.
        </Text>
        <Text style={[styles.text, styles.sub]}>
          We will send you one time password (OTP)
        </Text>
        <View style={styles.inputOutline}>
          {errorMsg && <Text style={styles.error}>{errorMsg}</Text>}
          <Input
            placeholder={"Enter your mobile number"}
            keyboardType={"numeric"}
            onChangeText={(e) => setPhoneNumber(e)}
          />
        </View>
      </View>
      <Button text={"Send"} onPress={Login} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  image: {
    width: 200,
    height: 200,
  },
  imageoutline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },
  text: {
    paddingHorizontal: 20,
    textAlign: "center",
  },
  header: {
    color: "#404040",
    fontWeight: "500",
    fontSize: 25,
  },
  sub: {
    marginTop: 20,
    color: "gray",
    fontSize: 18,
    paddingHorizontal: 70,
    fontWeight: "500",
  },
  inputOutline: {
    marginVertical: 50,
  },
  error: {
    color: "#eb4d4b",
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 10,
  },
});
