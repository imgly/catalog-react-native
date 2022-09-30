import { Configuration, VESDK } from "react-native-videoeditorsdk";

export const videoStickerRemoteURLExample = async (): Promise<void> => {
  // Add a video from the assets directory.
  const video = require("../../../../../assets/vesdk/Skater.mp4");

  try {
    // Create a `Configuration` object.
    //
    // The sticker tool is optimized for remote resources which allows to directly
    // integrate a remote URL instead of downloading the asset before. For an
    // example on how to download the remote resources in advance and use the local
    // downloaded resources, see: src/examples/text/addFonts/fromRemoteURL.
    const configuration: Configuration = {
      sticker: {
        // A custom sticker category.
        // highlight-custom-category
        categories: [
          {
            identifier: "custom",
            name: "Custom",
            thumbnailURI:
              "https://img.ly/static/example-assets/custom_sticker_igor.png",
            items: [
              // A custom sticker.
              // highlight-custom-sticker
              {
                identifier: "custom_sticker_igor",
                name: "Igor",
                stickerURI:
                  "https://img.ly/static/example-assets/custom_sticker_igor.png",
              },
              // highlight-custom-sticker
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
