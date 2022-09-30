import { AlignmentMode, Configuration } from "react-native-videoeditorsdk";

// <code-example>
const configuration: Configuration = {
  watermark: {
    watermarkURI: require("../../../assets/watermark.png"),
    alignment: AlignmentMode.BOTTOM_LEFT,
    size: 0.2,
    inset: 0.05,
  },
  export: {
    force: true,
  },
};
// <code-example>
