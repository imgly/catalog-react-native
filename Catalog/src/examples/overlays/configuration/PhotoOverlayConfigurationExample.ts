import { BlendMode, Configuration, PESDK } from "react-native-photoeditorsdk";

export const photoOverlayConfigurationExample = async (): Promise<void> => {
  // Add a photo from the assets directory.
  const photo = require("../../../../assets/pesdk/LA.jpg");

  // Create a `Configuration` object.
  const configuration: Configuration = {
    overlay: {
      // By default, all available blend modes are enabled.
      // For this example, only a couple are enabled for usage.
      // highlight-modes
      blendModes: [
        BlendMode.COLOR_BURN,
        BlendMode.DARKEN,
        BlendMode.HARD_LIGHT,
        BlendMode.LIGHTEN,
      ],
      // highlight-modes
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
