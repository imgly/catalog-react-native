import {
  CanvasAction,
  Configuration,
  VESDK,
} from "react-native-videoeditorsdk";

export const videoTextDesignConfigurationExample = async (): Promise<void> => {
  // Add a video from the assets directory.
  const video = require("../../../../assets/vesdk/Skater.mp4");

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
    // Open the video editor and handle the export as well as any occuring errors.
    const result = await VESDK.openEditor(video, configuration);

    if (result != null) {
      // The user exported a new video successfully and the newly generated video is located at `result.video`.
      console.log(result?.video);
    } else {
      // The user tapped on the cancel button within the editor.
      return;
    }
  } catch (error) {
    // There was an error generating the video.
    console.log(error);
  }
};
