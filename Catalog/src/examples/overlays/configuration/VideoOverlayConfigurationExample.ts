import { BlendMode, Configuration, VESDK } from "react-native-videoeditorsdk";

export const videoOverlayConfigurationExample = async (): Promise<void> => {
  try {
    // Add a video from the assets directory.
    const video = require("../../../../assets/vesdk/Skater.mp4");

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
