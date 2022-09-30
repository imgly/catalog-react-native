import {
  CanvasAction,
  Configuration,
  TextAction,
  VESDK,
} from "react-native-videoeditorsdk";

export const videoTextConfigurationExample = async (): Promise<void> => {
  try {
    // Add a video from the assets directory.
    const video = require("../../../../assets/vesdk/Skater.mp4");

    // Create a `Configuration` object.
    const configuration: Configuration = {
      text: {
        // By default the editor allows all available text actions.
        // For this example, we only allow changing the colors.
        // highlight-actions
        actions: [TextAction.COLOR, TextAction.BACKGROUND_COLOR],
        // highlight-actions

        // By default the editor allows a bunch of canvas actions in the text tool.
        // For this example, we only allow a couple of them.
        // highlight-canvas-actions
        canvasActions: [CanvasAction.DELETE, CanvasAction.BRING_TO_FRONT],
        // highlight-canvas-actions

        // By default the editor allows to add emojis as text input.
        // Since emojis are not cross-platform compatible, using the serialization
        // feature to share edits across different platforms will result in emojis
        // being rendered with the system's local set of emojis and therefore will
        // appear differently.
        // For this example emoji input is disabled to ensure a consistent cross-platform experience.
        // highlight-emoji
        allowEmojis: false,
        // highlight-emoji

        // By default the editor provides a variety of different
        // colors to customize the background color of the text.
        // For this example only a small selection of colors is shown by default
        // e.g. based on favorite colors of the user.
        // highlight-background-color
        backgroundColors: [
          { color: [0.9, 0.31, 0.31, 1], name: "Red" },
          { color: [0.33, 1.0, 0.53, 1], name: "Green" },
          { color: [1.0, 0.97, 0.39, 1], name: "Yellow" },
        ],
        // highlight-background-color

        // By default the editor provides a variety of different
        // colors to customize the color of the text.
        // For this example only a small selection of colors is shown by default
        // e.g. based on favorite colors of the user.
        // highlight-text-color
        textColors: [
          { color: [0, 0, 0, 1], name: "White" },
          { color: [1, 1, 1, 1], name: "Black" },
        ],
        // highlight-text-color

        // By default the default text color is set to [1, 1, 1, 1].
        // For this example, the default color is set to black.
        // highlight-default-color
        defaultTextColor: [0, 0, 0, 1],
        // highlight-default-color
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
