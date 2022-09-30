import { VESDK } from "react-native-videoeditorsdk";

export const videoDeserializationExample = async (): Promise<void> => {
  // Add a video from the assets directory.
  const video = require("../../../../assets/vesdk/Skater.mp4");

  // Load the serialized settings from the app bundle. You could also load this from a remote URL for example.
  // highlight-serialization
  const serialization = require("../../../../assets/vesdk/video_serialization.json");
  // highlight-serialization

  try {
    // Open the video editor and handle the export as well as any occuring errors.
    // Pass the serialization to the editor as well.
    // highlight-open-editor
    const result = await VESDK.openEditor(video, undefined, serialization);
    // highlight-open-editor

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
