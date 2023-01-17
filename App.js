import React from "react";
import { StatusBar } from "expo-status-bar";
import LoginScreen from "./Components/Screens/LoginScreen";
import { APP_PAGES } from "./context/settings";
import AppProvider, { AppContext } from "./context/AppContext";
import VerifyScreen from "./Components/Screens/VerifyScreen";
import HomeScreen from "./Components/Screens/HomeScreen";
import { View } from "react-native";
import SettingsScreen from "./Components/Screens/SettingsScreen";
import SpecChatScreen from "./Components/Screens/SpecChatScreen";

function App() {
  return (
    <AppProvider>
      <NavWrapper />
    </AppProvider>
  );
}

const NavWrapper = () => {
  const { navPage, setNavPage } = React.useContext(AppContext);
  const onSetNavPage = (e) => {
    setNavPage(e);
  };

  React.useEffect(() => {
    console.log("App Nav: ", navPage);
  }, [navPage]);

  return (
    <>
      <StatusBar
        style="dark"
        backgroundColor="#fff"
        hidden={false}
        translucent={true}
      />
      {navPage === APP_PAGES.APP.LOGIN && <LoginScreen />}
      {navPage === APP_PAGES.APP.VERIFY && <VerifyScreen />}
      {navPage === APP_PAGES.APP.HOME && <HomeScreen />}
      {navPage === APP_PAGES.APP.SETTINGS && <SettingsScreen />}
      {navPage === APP_PAGES.APP.SPEC_CHAT && <SpecChatScreen />}
    </>
  );
};

export default App;
