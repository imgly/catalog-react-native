import {
  CanvasAction,
  Configuration,
  PESDK,
} from "react-native-photoeditorsdk";

export const photoTextDesignConfigurationExample = async (): Promise<void> => {
  // Add a photo from the assets directory.
  const photo = require("../../../../assets/pesdk/LA.jpg");

  // Create a `Configuration` object.
  const configuration: Configuration = {
    textdesign: {
      // By default the editor provides a lot of colors.
      // For this example only a few colors are enabled.
      // highlight-color
      colors: [
        {
          name: "White",
          color: "#ffffff",
        },
        {
          name: "Black",
          color: "#000000",
        },
      ],
      // highlight-color

      // By default the editor has all available overlay actions for this tool
      // enabled. For this example `CanvasAction.UNDO` and `CanvasAction.REDO`
      // are removed.
      // highlight-actions
      canvasActions: [
        CanvasAction.ADD,
        CanvasAction.BRING_TO_FRONT,
        CanvasAction.DELETE,
        CanvasAction.INVERT,
      ],
      // highlight-actions
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
