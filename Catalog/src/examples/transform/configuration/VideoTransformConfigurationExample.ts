import { Configuration, VESDK } from "react-native-videoeditorsdk";

export const videoTransformConfigurationExample = async (): Promise<void> => {
  // Add a video from the assets directory.
  const video = require("../../../../assets/vesdk/Skater.mp4");

  // Create a `Configuration` object.
  const configuration: Configuration = {
    transform: {
      // By default the editor has a lot of crop aspects enabled.
      // For this example only a couple are enabled, e.g. if you
      // only allow certain video aspects in your application.
      // highlight-crop-ratios
      items: [
        {
          width: 1,
          height: 1,
        },
        {
          width: 19,
          height: 9,
          name: "Landscape",
        },
      ],
      // highlight-crop-ratios

      // By default the editor allows to use a free crop ratio.
      // For this example this is disabled to ensure that the video
      // has a suitable ratio.
      // highlight-free-crop
      allowFreeCrop: false,
      // highlight-free-crop

      // By default the editor shows the reset button which resets
      // the applied transform operations. In this example the button
      // is hidden since we are enforcing certain ratios and the user
      // can only select among them anyway.
      // highlight-reset-button
      showResetButton: false,
      // highlight-reset-button
    },

    // For this example the user is forced to crop the asset to one of
    // the allowed crop aspects specified above, before being able to use other
    // features of the editor. The transform tool will only be presented
    // if the video does not already fit one of those allowed aspect ratios.
    // highlight-force-crop
    forceCrop: true,
    // highlight-force-crop
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
