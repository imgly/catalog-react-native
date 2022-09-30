import { Configuration, PESDK } from "react-native-photoeditorsdk";

export const photoStickerAppBundleExample = async (): Promise<void> => {
  // Add a photo from the assets directory.
  const photo = require("../../../../../assets/pesdk/LA.jpg");

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

    // Open the photo editor and handle the export as well as any occuring errors.
    const result = await PESDK.openEditor(photo, configuration);

    if (result != null) {
      // The user exported a new photo successfully and the newly generated photo is located at `result.image`.
      console.log(result.image);
    } else {
      // The user tapped on the cancel button within the editor.
      return;
    }
  } catch (error) {
    // There was an error generating the photo.
    console.log(error);
  }
};
