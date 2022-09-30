import { BlendMode, Configuration } from "react-native-videoeditorsdk";

// <code-example-overlays>
const configuration: Configuration = {
  overlay: {
    items: [
      {
        identifier: "custom_overlay",
        name: "Custom",
        defaultBlendMode: BlendMode.OVERLAY,
        overlayURI: require("../../../../../assets/imgly_overlay_grain.jpg"),
      },
    ],
  },
};
// <code-example-overlays>
