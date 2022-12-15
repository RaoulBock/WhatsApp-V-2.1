import React from "react";
import { APP_PAGES } from "./settings";

export const AppContext = React.createContext({
  navPage: "",
  setNavPage: (val) => {}
});

const AppProvider = ({ children }) => {
  const [navPage, setNavPage] = React.useState(APP_PAGES.APP.LOGIN);
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [errorMsg, setErrorMsg] = React.useState("");
  const [userLog, setUserLog] = React.useState({ number: null });
  const [userInfo, setUserInfo] = React.useState([]);
  const [specChat, setSpecChat] = React.useState();

  return (
    <AppContext.Provider
      value={{
        navPage,
        setNavPage,
        phoneNumber,
        setPhoneNumber,
        errorMsg,
        setErrorMsg,
        userLog,
        setUserLog,
        userInfo,
        setUserInfo,
        specChat,
        setSpecChat
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
