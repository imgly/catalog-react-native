import { Configuration, PESDK, Tool } from "react-native-photoeditorsdk";

export const openPhotoFromLocalPathExample = async (): Promise<void> => {
  // Add a photo from the assets directory.
  const photo = require("../../../../../assets/pesdk/LA.jpg");

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
