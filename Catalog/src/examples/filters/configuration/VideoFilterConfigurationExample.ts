import { Configuration, VESDK } from "react-native-videoeditorsdk";

export const videoFilterConfigurationExample = async (): Promise<void> => {
  // Add a video from the assets directory.
  const video = require("../../../../assets/vesdk/Skater.mp4");

  // Create a `Configuration` object.
  const configuration: Configuration = {
    filter: {
      // By default, the filters are grouped according to the filter
      // categories passed to the configuration. In this example,
      // the filter grouping is disabled so that all
      // available filters will be displayed separately.
      // highlight-flatten
      flattenCategories: true,
      // highlight-flatten
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
