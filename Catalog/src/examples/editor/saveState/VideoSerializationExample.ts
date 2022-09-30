import {
  Configuration,
  SerializationExportType,
  VESDK,
} from "react-native-videoeditorsdk";

export const videoSerializationExample = async (): Promise<void> => {
  // Add a video from the assets directory.
  const video = require("../../../../assets/vesdk/Skater.mp4");

  // Create a `Configuration` object.
  // highlight-serialization
  const configuration: Configuration = {
    export: {
      serialization: {
        // Enable the serialization feature.
        enabled: true,

        // For this example, the serialization should be returned
        // as an object to simply logging it in the console.
        exportType: SerializationExportType.OBJECT,
      },
    },
  };
  // highlight-serialization

  try {
    // Open the video editor and handle the export as well as any occuring errors.
    // highlight-open-editor
    const result = await VESDK.openEditor(video, configuration);
    // highlight-open-editor

    if (result != null) {
      // The user exported a new video successfully and the newly generated video is located at `result.video`
      // and the serialization is located at `result.serialization`.
      // highlight-usage
      console.log(result?.video);
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
