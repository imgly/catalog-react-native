import { Configuration, PESDK } from "react-native-photoeditorsdk";

export const photoTextAppBundleExample = async (): Promise<void> => {
  try {
    // Add a photo from the assets directory.
    const photo = require("../../../../../assets/pesdk/LA.jpg");

    // Create a `Configuration` object.
    const configuration: Configuration = {
      text: {
        fonts: [
          // A custom font.
          // highlight-custom
          {
            identifier: "custom_font_raleway_regular",
            name: "Raleway",
            fontName: "custom_font_raleway_regular",
            fontURI: require("../../../../../assets/custom_font_raleway_regular.ttf"),
          },
          // highlight-custom
          // A system font.
          // highlight-system
          {
            identifier: "system_font_helvetica",
            name: "Helvetica",
            fontName: "Helvetica",
          },
          // highlight-system
        ],
      },
    };

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
