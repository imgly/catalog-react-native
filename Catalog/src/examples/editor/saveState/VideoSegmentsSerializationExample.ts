import { Configuration, VESDK } from "react-native-videoeditorsdk";

export const videoSegmentsSerializationExample = async (): Promise<void> => {
  // Add a video from the assets directory.
  const video = require("../../../../assets/vesdk/Skater.mp4");

  // Create a `Configuration` object.
  // highlight-serialization
  const configuration: Configuration = {
    export: {
      video: {
        segments: true,
      },
    },
  };
  // highlight-serialization

  try {
    // Open the video editor and handle the export as well as any occurring errors.
    const result = await VESDK.openEditor(video, configuration);

    if (result != null) {
      // The user exported a new video successfully and the newly generated video
      // is located at `result.video`, the segments are located at `result.segments`
      // and the size of the video is located at `result.videoSize`.
      // highlight-usage
      console.log(result);

      // Once you have processed the serialized segments, you need to release the
      // result.
      if (result.release != null) {
        result.release();
      }
      // highlight-usage
    } else {
      // The user tapped on the cancel button within the editor.
      return;
    }
  } catch (error) {
    // There was an error generating the video.
    console.log(error);
  }
};
