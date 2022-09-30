import { Configuration, VESDK } from "react-native-videoeditorsdk";

export const videoTextAppBundleExample = async (): Promise<void> => {
  try {
    // Add a video from the assets directory.
    const video = require("../../../../../assets/vesdk/Skater.mp4");

    // Create a `Configuration` object.
    const configuration: Configuration = {
      text: {
        fonts: [
          // A custom font.
          // highlight-custom
          {
            identifier: "custom_font_raleway_regular",
            name: "Raleway",
            fontName: "custom_font_raleway_regular",
            fontURI: require("../../../../../assets/custom_font_raleway_regular.ttf"),
          },
          // highlight-custom
          // A system font.
          // highlight-system
          {
            identifier: "system_font_helvetica",
            name: "Helvetica",
            fontName: "Helvetica",
          },
          // highlight-system
        ],
      },
    };

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
