import { VESDK } from "react-native-videoeditorsdk";
import * as ImagePicker from "expo-image-picker";

export const openVideoFromCameraRollExample = async (): Promise<void> => {
  try {
    // Select a video from the camera roll.
    // highlight-select-resource
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
    });

    // Return if the video selection has been cancelled.
    if (pickerResult.cancelled) {
      return;
    }
    // highlight-select-resource

    // Open the video editor and handle the export as well as any occuring errors.
    // highlight-open-editor
    const result = await VESDK.openEditor(pickerResult.uri);

    if (result != null) {
      // The user exported a new video successfully and the newly generated video is located at `result.video`.
      console.log(result?.video);
    } else {
      // The user tapped on the cancel button within the editor.
      return;
    }
  } catch (error) {
    console.log(error);
    // highlight-open-editor
  }
};
