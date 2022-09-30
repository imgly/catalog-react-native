import { PESDK } from "react-native-photoeditorsdk";

export const photoDeserializationExample = async (): Promise<void> => {
  // Add a photo from the assets directory.
  const photo = require("../../../../assets/pesdk/LA.jpg");

  // Load the serialized settings from the app bundle. You could also load this from a remote URL for example.
  // highlight-serialization
  const serialization = require("../../../../assets/pesdk/photo_serialization.json");
  // highlight-serialization

  try {
    // Open the video editor and handle the export as well as any occuring errors.
    // Pass the serialization to the editor as well.
    // highlight-open-editor
    const result = await PESDK.openEditor(photo, undefined, serialization);
    // highlight-open-editor

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
