import { Configuration, VESDK } from "react-native-videoeditorsdk";

export const videoStickerAppBundleExample = async (): Promise<void> => {
  // Add a video from the assets directory.
  const video = require("../../../../../assets/vesdk/Skater.mp4");

  try {
    // Create a `Configuration` object.
    const configuration: Configuration = {
      sticker: {
        // A custom sticker category.
        // highlight-custom-category
        categories: [
          {
            identifier: "custom",
            name: "Custom",
            thumbnailURI: require("../../../../../assets/custom_sticker_igor.png"),
            items: [
              // A custom sticker.
              // highlight-custom-sticker
              {
                identifier: "custom_sticker_igor",
                name: "Igor",
                stickerURI: require("../../../../../assets/custom_sticker_igor.png"),
                // highlight-custom-sticker
              },
              // An existing sticker.
              // highlight-existing-sticker
              { identifier: "imgly_sticker_shapes_badge_01" },
              // highlight-existing-sticker
            ],
          },
          // highlight-custom-category
          // An existing sticker category.
          // highlight-category
          { identifier: "imgly_sticker_category_emoticons" },
          // highlight-category
        ],
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
