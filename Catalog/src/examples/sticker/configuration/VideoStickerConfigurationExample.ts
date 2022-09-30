import {
  CanvasAction,
  Configuration,
  StickerAction,
  TintMode,
  VESDK,
} from "react-native-videoeditorsdk";

export const videoStickerConfigurationExample = async (): Promise<void> => {
  // Add a video from the assets directory.
  const video = require("../../../../assets/vesdk/Skater.mp4");

  try {
    // Create a `Configuration` object.
    const configuration: Configuration = {
      sticker: {
        // By default, the user is not allowed to add
        // custom stickers from the local library. For
        // this example, this option is enabled.
        // highlight-personal
        personalStickers: true,
        // highlight-personal

        // By default, the default tint mode for personal stickers
        // is set to `TintMode.NONE`. For this example, this is set
        // to `TintMode.SOLID`
        // highlight-default-tint-mode
        defaultPersonalStickerTintMode: TintMode.SOLID,
        // highlight-default-tint-mode

        // By default, a lot of colors are enabled.
        // For this example, only a small selection
        // is enabled.
        // highlight-colors
        colors: [
          { name: "White", color: [1, 1, 1, 1] },
          { name: "Black", color: [0, 0, 0, 0] },
        ],
        // highlight-colors

        // By default, all available canvas actions are enabled.
        // For this example, the user is only allowed to undo
        // and redo changes.
        // highlight-canvas-actions
        canvasActions: [CanvasAction.UNDO, CanvasAction.REDO],
        // highlight-canvas-actions

        // By default, all available sticker actions are enabled.
        // For this example, only a few tools are enabled.
        // highlight-actions
        actions: [
          StickerAction.COLOR,
          StickerAction.REPLACE,
        ],
        // highlight-actions
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
