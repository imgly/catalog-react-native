import { VESDK, VideoSegment } from "react-native-videoeditorsdk";

export const videoSegmentsDeserializationExample = async (): Promise<void> => {
  // Load the serialized segments and the serialized video size.
  // highlight-serialization
  const segments: VideoSegment[] = [
    {
      videoURI: require("../../../../assets/vesdk/Skater.mp4"),
      startTime: 1.5,
      endTime: 4,
    },
    {
      videoURI: require("../../../../assets/vesdk/rollerskates.mp4"),
      startTime: 0.5,
      endTime: 1.5,
    },
  ];

  const videoSize = {
    height: 450,
    width: 450,
  };
  // highlight-serialization

  try {
    // Open the video editor and handle the export as well as any occuring errors.
    // Pass the serialization to the editor as well.
    // highlight-open-editor
    const result = await VESDK.openEditor(segments, undefined, undefined, videoSize);
    // highlight-open-editor

    if (result != null) {
      // The user exported a new video successfully and the newly generated video is located at `result.video`.
      console.log(result);
    } else {
      // The user tapped on the cancel button within the editor.
      return;
    }
  } catch (error) {
    // There was an error generating the video.
    console.log(error);
  }
};
