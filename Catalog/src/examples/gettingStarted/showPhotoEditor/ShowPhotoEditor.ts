import { PESDK } from "react-native-photoeditorsdk";

export const showPhotoEditorExample = async (): Promise<void> => {
  try {
    // Add a photo from the assets directory.
    // highlight-open-editor
    const photo = require("../../../../assets/pesdk/LA.jpg");

    // Open the photo editor and handle the export as well as any occuring errors.
    const result = await PESDK.openEditor(photo);
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
  // highlight-events
};
