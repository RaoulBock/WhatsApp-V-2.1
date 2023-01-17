export const APP_PAGES = {
  APP: {
    LOGIN: "LOGIN",
    VERIFY: "VERIFY",
    HOME: "HOME",
    SETTINGS: "SETTINGS",
    SPEC_CHAT: "SPEC_CHAT",
  },
};

import { Ionicons } from "react-native-vector-icons";

export const APP_ICONS = {
  BACK: (
    <Ionicons
      name="ios-arrow-back"
      style={{ color: "#5f40a6", fontWeight: "500", fontSize: 20 }}
    />
  ),
  SEARCH: (
    <Ionicons
      name="ios-search-outline"
      style={{ color: "#5f40a6", fontWeight: "500", fontSize: 28 }}
    />
  ),
  PLUS: (
    <Ionicons
      name="ios-add-outline"
      style={{ color: "#21d37c", fontWeight: "500", fontSize: 28 }}
    />
  ),
  HOME: (
    <Ionicons
      name="ios-home-outline"
      style={{ color: "#fff", fontWeight: "500", fontSize: 28 }}
    />
  ),
  PHONE: (
    <Ionicons
      name="ios-call-outline"
      style={{ color: "#fff", fontWeight: "500", fontSize: 28 }}
    />
  ),
  CAMERA: (
    <Ionicons
      name="ios-camera-outline"
      style={{ color: "#21d37c", fontWeight: "500", fontSize: 28 }}
    />
  ),
  NOTIFICATION: (
    <Ionicons
      name="ios-notifications-outline"
      style={{ color: "#fff", fontWeight: "500", fontSize: 28 }}
    />
  ),
  DOTS: (
    <Ionicons
      name="ios-ellipsis-vertical-outline"
      style={{ color: "#5f40a6", fontWeight: "500", fontSize: 20 }}
    />
  ),
  SETTINGS: (
    <Ionicons
      name={"ios-settings-outline"}
      style={{ color: "#fff", fontWeight: "500", fontSize: 20 }}
    />
  ),
  EDIT: (
    <Ionicons
      name={"ios-pencil-outline"}
      style={{ color: "#5f40a6", fontWeight: "500", fontSize: 20 }}
    />
  ),
  DISCOVER: (
    <Ionicons
      name={"ios-compass-outline"}
      style={{ color: "#fff", fontWeight: "500", fontSize: 20 }}
    />
  ),
};

export const STATUS_USERS = [
  {
    id: 1,
    name: "Raoul Bock",
    image:
      "https://images.ctfassets.net/kdawwlsweh27/2LtummpjO849eQ83yGGiUN/316e62a71020a924f9f663b6ca6b7eda/Fresh_Stock_Content.jpg",
  },
  {
    id: 2,
    name: "Anthony Bock",
    image:
      "https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg",
  },
];

export const CHATS_DEMO = [
  {
    id: 1,
    message_from: "Raoul Bock",
    short_message:
      "Commodo non cillum fugiat reprehenderit adipisicing velit. Dolore dolor laborum ut exercitation. Proident ut irure elit ad nulla labore veniam cillum adipisicing fugiat occaecat.",
    image:
      "https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg",
    active: false,
  },
  {
    id: 2,
    message_from: "Anthony Bock",
    short_message:
      "Commodo non cillum fugiat reprehenderit adipisicing velit. Dolore dolor laborum ut exercitation. Proident ut irure elit ad nulla labore veniam cillum adipisicing fugiat occaecat.",
    image:
      "https://images.ctfassets.net/kdawwlsweh27/2LtummpjO849eQ83yGGiUN/316e62a71020a924f9f663b6ca6b7eda/Fresh_Stock_Content.jpg",
    active: false,
  },
  {
    id: 3,
    message_from: "Raoul Bock",
    short_message:
      "Commodo non cillum fugiat reprehenderit adipisicing velit. Dolore dolor laborum ut exercitation. Proident ut irure elit ad nulla labore veniam cillum adipisicing fugiat occaecat.",
    image:
      "https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg",
    active: false,
  },
  {
    id: 4,
    message_from: "Anthony Bock",
    short_message:
      "Commodo non cillum fugiat reprehenderit adipisicing velit. Dolore dolor laborum ut exercitation. Proident ut irure elit ad nulla labore veniam cillum adipisicing fugiat occaecat.",
    image:
      "https://images.ctfassets.net/kdawwlsweh27/2LtummpjO849eQ83yGGiUN/316e62a71020a924f9f663b6ca6b7eda/Fresh_Stock_Content.jpg",
    active: false,
  },
  {
    id: 1,
    message_from: "Raoul Bock",
    short_message:
      "Commodo non cillum fugiat reprehenderit adipisicing velit. Dolore dolor laborum ut exercitation. Proident ut irure elit ad nulla labore veniam cillum adipisicing fugiat occaecat.",
    image:
      "https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg",
    active: false,
  },
  {
    id: 2,
    message_from: "Anthony Bock",
    short_message:
      "Commodo non cillum fugiat reprehenderit adipisicing velit. Dolore dolor laborum ut exercitation. Proident ut irure elit ad nulla labore veniam cillum adipisicing fugiat occaecat.",
    image:
      "https://images.ctfassets.net/kdawwlsweh27/2LtummpjO849eQ83yGGiUN/316e62a71020a924f9f663b6ca6b7eda/Fresh_Stock_Content.jpg",
    active: true,
  },
  {
    id: 3,
    message_from: "Raoul Bock",
    short_message:
      "Commodo non cillum fugiat reprehenderit adipisicing velit. Dolore dolor laborum ut exercitation. Proident ut irure elit ad nulla labore veniam cillum adipisicing fugiat occaecat.",
    image:
      "https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg",
    active: false,
  },
  {
    id: 4,
    message_from: "Anthony Bock",
    short_message:
      "Commodo non cillum fugiat reprehenderit adipisicing velit. Dolore dolor laborum ut exercitation. Proident ut irure elit ad nulla labore veniam cillum adipisicing fugiat occaecat.",
    image:
      "https://images.ctfassets.net/kdawwlsweh27/2LtummpjO849eQ83yGGiUN/316e62a71020a924f9f663b6ca6b7eda/Fresh_Stock_Content.jpg",
    active: false,
  },
];

export const MESSAGE_FROM = [
  {
    id: 1,
    message:
      "Occaecat deserunt occaecat veniam duis pariatur minim fugiat elit. Culpa consectetur excepteur et proident cupidatat mollit enim adipisicing velit ut eu labore pariatur. Proident laborum veniam voluptate est et culpa ex. Ut minim ex eu ad sunt veniam sunt laborum ex dolore reprehenderit adipisicing anim sunt. Eiusmod voluptate anim eu cillum culpa. Anim deserunt labore ea mollit labore officia duis officia pariatur mollit. Anim fugiat reprehenderit occaecat laborum mollit.",
    image:
      "https://images.ctfassets.net/kdawwlsweh27/2LtummpjO849eQ83yGGiUN/316e62a71020a924f9f663b6ca6b7eda/Fresh_Stock_Content.jpg",
  },
  {
    id: 2,
    message:
      "Aute aliqua commodo est non enim eu cupidatat excepteur ad aute. Nostrud incididunt reprehenderit labore ipsum velit fugiat dolore elit eiusmod irure. Amet incididunt est irure Lorem pariatur tempor qui dolore adipisicing Lorem reprehenderit consequat adipisicing aliqua.",
    image:
      "https://images.ctfassets.net/kdawwlsweh27/2LtummpjO849eQ83yGGiUN/316e62a71020a924f9f663b6ca6b7eda/Fresh_Stock_Content.jpg",
  },
];

export const MESSAGE_TO = [
  {
    id: 1,
    message:
      "Tempor nulla elit commodo et exercitation fugiat sunt nostrud elit est Lorem pariatur. Do incididunt incididunt occaecat ea culpa ex ullamco laborum non sit ipsum. Id minim eiusmod culpa aute incididunt qui amet nisi pariatur. Aliqua id ut laborum id id esse culpa commodo. Sunt officia ad esse fugiat eu enim duis consectetur culpa.",
    image:
      "https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg",
  },
  {
    id: 2,
    message:
      "Magna magna veniam consectetur nisi eiusmod eiusmod esse dolore magna amet. Esse pariatur duis sint esse irure sunt anim quis consectetur nisi minim. Veniam sunt nulla sint duis in enim amet nulla ad ea cillum. Sunt voluptate velit sint dolor cupidatat.",
    image:
      "https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg",
  },
];
