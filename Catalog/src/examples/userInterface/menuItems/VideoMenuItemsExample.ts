import { Configuration, Tool, VESDK } from "react-native-videoeditorsdk";

export const openVideoFromLocalPathExample = async (): Promise<void> => {
  // Add a video from the assets directory.
  const video = require("../../../../../assets/vesdk/Skater.mp4");

  try {
    // Create a `Configuration` object.
    const configuration: Configuration = {
      // In this example, the tools are sorted by alphabetical
      // order instead of the default order.
      // highlight-configure
      tools: [
        Tool.ADJUSTMENT,
        Tool.AUDIO,
        Tool.BRUSH,
        Tool.COMPOSITION,
        Tool.FILTER,
        Tool.FOCUS,
        Tool.FRAME,
        Tool.OVERLAY,
        Tool.STICKER,
        Tool.TEXT,
        Tool.TEXT_DESIGN,
        Tool.TRANSFORM,
        Tool.TRIM,
      ],
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
