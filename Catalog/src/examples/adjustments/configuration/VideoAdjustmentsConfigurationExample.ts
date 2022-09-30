import {
  AdjustmentTool,
  Configuration,
  VESDK,
} from "react-native-videoeditorsdk";

export const videoAdjustmentsConfigurationExample = async (): Promise<void> => {
  // Add a video from the assets directory.
  const video = require("../../../../assets/vesdk/Skater.mp4");

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
