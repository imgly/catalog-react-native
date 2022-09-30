import {
  Configuration,
  ForceTrimMode,
  VESDK,
} from "react-native-videoeditorsdk";

export const videoEnforceDurationExample = async (): Promise<void> => {
  // Add a video from the assets directory.
  const video = require("../../../../assets/vesdk/Skater.mp4");

  // Create a `Configuration` object.
  const configuration: Configuration = {
    // The duration limits of these configuration options are
    // also respected by the composition tool.
    trim: {
      // By default the editor does not have a maximum duration.
      // For this example the duration is set, e.g. for a social
      // media application where the posts are not allowed to be
      // longer than 5 seconds.
      maximumDuration: 5.0,

      // By default the editor does not limit the maximum video duration.
      // For this example the duration is set, e.g. for a social
      // media application where the posts are not allowed to be
      // shorter than 2 seconds.
      minimumDuration: 2.0,

      // By default the editor trims the video automatically if it is
      // longer than the specified maximum duration. For this example the user
      // is prompted to review and adjust the automatically trimmed video.
      // highlight-force-trim
      forceMode: ForceTrimMode.IF_NEEDED,
      // highlight-force-trim
    },
  };
  try {
    // Open the video editor and handle the export as well as any occuring errors.
    const result = await VESDK.openEditor(video, configuration);

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
