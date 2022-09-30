import { Configuration } from "react-native-photoeditorsdk";

// <code-example-categories>
const configuration: Configuration = {
  audio: {
    categories: [
      {
        identifier: "custom",
        name: "Custom",
        items: [
          {
            identifier: "elsewhere",
            audioURI: require("../../../assets/vesdk/elsewhere.mp3"),
          },
        ],
      },
    ],
  },
};
// <code-example-categories>
