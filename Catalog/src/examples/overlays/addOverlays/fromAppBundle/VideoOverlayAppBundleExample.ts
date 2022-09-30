import { BlendMode, Configuration, VESDK } from "react-native-videoeditorsdk";

export const videoOverlayAppBundleExample = async (): Promise<void> => {
  // Add a video from the assets directory.
  const video = require("../../../../../assets/vesdk/Skater.mp4");

  // Create a `Configuration` object.
  const configuration: Configuration = {
    overlay: {
      items: [
        // highlight-custom-overlay
        {
          identifier: "custom_overlay",
          name: "Custom",
          defaultBlendMode: BlendMode.OVERLAY,
          overlayURI: require("../../../../../assets/imgly_overlay_grain.jpg"),
        },
        // highlight-custom-overlay
        // highlight-existing-overlay
        { identifier: "imgly_overlay_rain" },
        { identifier: "imgly_overlay_mosaic" },
        // highlight-existing-overlay
      ],
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
