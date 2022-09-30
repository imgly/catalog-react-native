import {
  AdjustmentTool,
  Configuration,
  PESDK,
} from "react-native-photoeditorsdk";

export const photoAdjustmentConfigurationExample = async (): Promise<void> => {
  // Add a photo from the assets directory.
  const photo = require("../../../../assets/pesdk/LA.jpg");

  // Create a `Configuration` object.
  const configuration: Configuration = {
    adjustment: {
      // By default the editor always shows the reset button.
      // For this example, the reset button should not be shown.
      // highlight-reset
      showResetButton: false,
      // highlight-reset

      // By default the editor shows all avaliable adjust tools.
      // For this example, the editor should only show a small selection
      // of them.
      // highlight-tools
      items: [
        AdjustmentTool.BRIGHTNESS,
        AdjustmentTool.CONTRAST,
        AdjustmentTool.SATURATION,
      ],
      // highlight-tools
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
