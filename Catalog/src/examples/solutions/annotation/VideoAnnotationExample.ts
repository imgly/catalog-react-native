import { Configuration, Tool, VESDK } from "react-native-videoeditorsdk";

export const videoAnnotationExample = async (): Promise<void> => {
  // Add a video from the assets directory.
  const video = require("../../../../assets/vesdk/Skater.mp4");

  // Create a `Configuration` object.
  const configuration: Configuration = {
    // For this example only the sticker, text, and brush tool are enabled.
    // highlight-menu
    tools: [Tool.STICKER, Tool.TEXT, Tool.BRUSH],
    // highlight-menu

    // For this example only stickers suitable for annotations are enabled.
    // highlight-stickers
    sticker: {
      categories: [
        {
          identifier: "annotation_stickers",
          name: "Annotation",
          thumbnailURI: require("../../../../assets/sticker_thumbnail.png"),
          items: [
            { identifier: "imgly_sticker_shapes_arrow_02" },
            { identifier: "imgly_sticker_shapes_arrow_03" },
            { identifier: "imgly_sticker_shapes_badge_11" },
            { identifier: "imgly_sticker_shapes_badge_12" },
            { identifier: "imgly_sticker_shapes_badge_36" },
          ],
        },
      ],
    },
    // highlight-stickers
  };

  try {
    // Open the video editor and handle the export as well as any occuring errors.
    // highlight-open-editor
    const result = await VESDK.openEditor(video, configuration);
    // highlight-open-editor

    // highlight-events
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
