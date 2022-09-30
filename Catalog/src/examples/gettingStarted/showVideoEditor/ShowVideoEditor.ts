import { VESDK } from "react-native-videoeditorsdk";

export const showVideoEditorExample = async (): Promise<void> => {
  try {
    // Add a video from the assets directory.
    // highlight-open-editor
    const video = require("../../../../assets/vesdk/Skater.mp4");

    // Open the video editor and handle the export as well as any occuring errors.
    const result = await VESDK.openEditor(video);
    // highlight-open-editor

    // highlight-events
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
  // highlight-events
};
