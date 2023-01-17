import React from "react";
import { APP_PAGES } from "./settings";
import * as Contacts from "expo-contacts";

export const AppContext = React.createContext({
  navPage: "",
  setNavPage: (val) => {},
});

const AppProvider = ({ children }) => {
  const [navPage, setNavPage] = React.useState(APP_PAGES.APP.LOGIN);
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [errorMsg, setErrorMsg] = React.useState("");
  const [userLog, setUserLog] = React.useState({ number: null });
  const [userInfo, setUserInfo] = React.useState([]);
  const [specChat, setSpecChat] = React.useState();
  const [contacts, setContacts] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [filteredContacts, setFilteredContacts] = React.useState([]);
  const [tab, setTab] = React.useState(0);

  React.useEffect(() => {
    const getContacts = async () => {
      // Ask for permission to access contacts
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        // Get all contacts
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Name],
        });

        // Parse the JSON data
        const parsedContacts = data.map((contact) => {
          return {
            name: contact.name,
            phoneNumber: contact.phoneNumbers[0].number,
          };
        });

        setContacts(parsedContacts);
      } else {
        throw new Error("Contacts permission not granted");
      }
    };
    getContacts();
  }, []);

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
        setSpecChat,
        contacts,
        setContacts,
        searchTerm,
        setSearchTerm,
        isLoading,
        setIsLoading,
        filteredContacts,
        setFilteredContacts,
        tab,
        setTab,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
