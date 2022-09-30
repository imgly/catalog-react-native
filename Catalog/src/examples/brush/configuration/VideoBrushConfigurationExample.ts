import { BrushAction, Configuration, VESDK } from "react-native-videoeditorsdk";

export const videoBrushConfigurationExample = async (): Promise<void> => {
  // Add a video from the assets directory.
  const video = require("../../../../assets/vesdk/Skater.mp4");

  // Create a `Configuration` object.
  const configuration: Configuration = {
    brush: {
      // By default all available brush tools are enabled.
      // For this example only a couple are enabled.
      // highlight-tools
      actions: [BrushAction.COLOR, BrushAction.SIZE],
      // highlight-tools

      // By default the default color for the brush stroke is
      // `#ffffff`. For this example the default color
      // is set to `#000000`.
      // highlight-color
      defaultColor: "#000000",
      // highlight-color

      // By default the default brush size is set to 5% of the
      // smaller side of the video.
      // For this example the default size is set to be 2.5% of
      // the smaller side of the video.
      // highlight-size
      defaultSize: 0.025,
      // highlight-size

      // By default the editor provides a variety of different
      // colors to customize the color of the brush stroke.
      // For this example only a small selection of colors is enabled.
      // highlight-colors
      colors: [
        {
          name: "White",
          color: "#ffffff",
        },
        {
          name: "Black",
          color: "#000000",
        },
        {
          name: "Red",
          color: "ff0000",
        },
      ],
      // highlight-colors
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
