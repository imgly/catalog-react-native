import { Configuration, FrameAction, PESDK } from "react-native-photoeditorsdk";

export const photoFramesConfigurationExample = async (): Promise<void> => {
  try {
    // Add a photo from the assets directory.
    const photo = require("../../../../assets/pesdk/LA.jpg");

    // Create a `Configuration` object.
    const configuration: Configuration = {
      frame: {
        // By default all actions are enabled in the frame tool.
        // For this example only two of them are enabled.
        // highlight-actions
        actions: [FrameAction.OPACITY, FrameAction.REPLACE],
        // highlight-actions
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
