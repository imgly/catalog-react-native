import { Configuration, Tool, VESDK } from "react-native-videoeditorsdk";

export const videoSingleToolExample = async (): Promise<void> => {
  // Add a video from the assets directory.
  const video = require("../../../../assets/vesdk/Skater.mp4");

  try {
    // Create a `Configuration` object.
    const configuration: Configuration = {
      // In this example, the single tool mode is enabled.
      // highlight-configure
      singleToolMode: true,
      // highlight-configure
      // To determine which tool is used, we need to assign it.
      // For this example, we only use the transform tool.
      // highlight-configure
      tools: [Tool.TRANSFORM],
      // highlight-configure
    };

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
