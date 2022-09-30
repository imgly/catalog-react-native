import { AssetURI, VESDK } from "react-native-videoeditorsdk";

export const openVideoFromMultipleVideosExample = async (): Promise<void> => {
  try {
    // Add videos from the assets directory.
    // highlight-clips
    const firstVideo = require("../../../../../assets/vesdk/Skater.mp4");
    const secondVideo = require("../../../../../assets/vesdk/rollerskates.mp4");

    const videos: AssetURI[] = [firstVideo, secondVideo];
    // highlight-clips

    // Open the video editor and handle the export as well as any occuring errors.
    // highlight-open-editor
    const result = await VESDK.openEditor(videos);
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
