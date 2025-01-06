import {
  CanvasAction,
  Configuration,
  VESDK,
} from "react-native-videoeditorsdk";

export const videoAudioConfigurationExample = async (): Promise<void> => {
  // Add a video from the assets directory.
  const video = require("../../../../assets/vesdk/Skater.mp4");

  // Create a `Configuration` object.
  const configuration: Configuration = {
    audio: {
      // In order to showcase the tool, we need to add some audio clips for
      // the audio tool.
      // highlight-clips
      categories: [
        {
          identifier: "custom",
          name: "Custom",
          items: [
            {
              identifier: "elsewhere",
              audioURI: require("../../../../assets/vesdk/elsewhere.mp3"),
            },
          ],
        },
      ],
      // highlight-clips
      // By default, the editor only allows the `CanvasAction.DELETE`.
      // For this example, the user should also be able to play and
      // pause the audio.
      // highlight-actions
      canvasActions: [CanvasAction.DELETE, CanvasAction.PLAY_PAUSE],
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
