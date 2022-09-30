import { Configuration, PESDK, Tool } from "react-native-photoeditorsdk";

export const photoAnnotationExample = async (): Promise<void> => {
  // Add a photo from the assets directory.
  const photo = require("../../../../assets/pesdk/LA.jpg");

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
    // Open the photo editor and handle the export as well as any occuring errors.
    // highlight-open-editor
    const result = await PESDK.openEditor(photo, configuration);
    // highlight-open-editor

    // highlight-events
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
