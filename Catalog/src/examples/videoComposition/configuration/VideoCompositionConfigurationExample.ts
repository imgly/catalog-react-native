import { Configuration, VESDK } from "react-native-videoeditorsdk";

export const videoCompositionConfigurationExample = async (): Promise<void> => {
  // Add a video from the assets directory.
  const video = require("../../../../assets/vesdk/Skater.mp4");

  // Create a `Configuration` object.
  const configuration: Configuration = {
    composition: {
      // Create new video clip categories with custom video clips from
      // the app bundle.
      // highlight-clips
      categories: [
        {
          identifier: "misc",
          name: "Misc",
          items: [
            {
              identifier: "delivery",
              videoURI: require("../../../../assets/vesdk/delivery.mp4"),
            },
            {
              identifier: "notes",
              videoURI: require("../../../../assets/vesdk/notes.mp4"),
            },
          ],
        },
        {
          identifier: "people",
          name: "People",
          items: [
            {
              identifier: "dj",
              videoURI: require("../../../../assets/vesdk/dj.mp4"),
            },
            {
              identifier: "rollerskates",
              videoURI: require("../../../../assets/vesdk/rollerskates.mp4"),
            },
          ],
        },
      ],
      // highlight-clips

      // By default the user is allowed to add personal video clips
      // from the device. For this example the user is only allowed
      // to add video clips that are predefined in the editor configuration.
      // highlight-personal
      personalVideoClips: false,
      // highlight-personal
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
