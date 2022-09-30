import { BlendMode, Configuration, PESDK } from "react-native-photoeditorsdk";

export const photoOverlayAppBundleExample = async (): Promise<void> => {
  // Add a photo from the assets directory.
  const photo = require("../../../../../assets/pesdk/LA.jpg");

  // Create a `Configuration` object.
  const configuration: Configuration = {
    overlay: {
      items: [
        // highlight-custom-overlay
        {
          identifier: "custom_overlay",
          name: "Custom",
          defaultBlendMode: BlendMode.OVERLAY,
          overlayURI: require("../../../../../assets/imgly_overlay_grain.jpg"),
        },
        // highlight-custom-overlay
        // highlight-existing-overlay
        { identifier: "imgly_overlay_rain" },
        { identifier: "imgly_overlay_mosaic" },
        // highlight-existing-overlay
      ],
    },
  };

  try {
    // Open the photo editor and handle the export as well as any occuring errors.
    const result = await PESDK.openEditor(photo, configuration);

    if (result != null) {
      // The user exported a new photo successfully and the newly generated photo is located at `result.image`.
      console.log(result.image);
    } else {
      // The user tapped on the cancel button within the editor.
      return;
    }
  } catch (error) {
    // There was an error generating the photo.
    console.log(error);
  }
};
