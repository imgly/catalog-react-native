import { Configuration } from "react-native-photoeditorsdk";

// <code-example-categories>
const configuration: Configuration = {
  filter: {
    categories: [
      {
        identifier: "custom_filter_group",
        name: "Custom",
        thumbnailURI: require("../../../assets/custom_filter_category.jpg"),
        items: [
          {
            identifier: "custom_filter",
            name: "Custom",
            lutURI: require("../../../assets/custom_lut_invert.png"),
          },
        ],
      },
    ],
  },
};
// <code-example-categories>
