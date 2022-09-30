import { PESDK } from "react-native-photoeditorsdk";
import * as ImagePicker from "expo-image-picker";

export const openPhotoFromCameraRollExample = async (): Promise<void> => {
  try {
    // Select a photo from the camera roll.
    // highlight-select-resource
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    // Return if the image selection has been cancelled.
    if (pickerResult.cancelled) {
      return;
    }
    // highlight-select-resource

    // Open the photo editor and handle the export as well as any occuring errors.
    // highlight-open-editor
    const result = await PESDK.openEditor(pickerResult.uri);

    if (result != null) {
      // The user exported a new photo successfully and the newly generated photo is located at `result.image`.
      console.log(result.image);
    } else {
      // The user tapped on the cancel button within the editor.
      return;
    }
  } catch (error) {
    console.log(error);
    // highlight-open-editor
  }
};
