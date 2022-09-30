import { FocusTool, Configuration, PESDK } from "react-native-photoeditorsdk";

export const photoFocusConfigurationExample = async (): Promise<void> => {
  // Add a photo from the assets directory.
  const photo = require("../../../../assets/pesdk/LA.jpg");

  // Create a `Configuration` object.
  const configuration: Configuration = {
    focus: {
      // By default the editor has all focus modes enabled.
      // For this example, only the given selection should
      // be enabled.
      // highlight-modes
      items: [FocusTool.NONE, FocusTool.RADIAL, FocusTool.LINEAR],
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
