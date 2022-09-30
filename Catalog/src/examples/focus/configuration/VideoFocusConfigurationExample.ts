import { Configuration, FocusTool, VESDK } from "react-native-videoeditorsdk";

export const videoFocusConfigurationExample = async (): Promise<void> => {
  // Add a video from the assets directory.
  const video = require("../../../../assets/vesdk/Skater.mp4");

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
