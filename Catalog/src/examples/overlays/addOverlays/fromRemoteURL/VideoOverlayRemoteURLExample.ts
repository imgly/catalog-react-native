import { BlendMode, Configuration, VESDK } from "react-native-videoeditorsdk";

export const videoOverlayRemoteURLExample = async (): Promise<void> => {
  // Add a video from the assets directory.
  const video = require("../../../../../assets/vesdk/Skater.mp4");

  // Create a `Configuration` object.
  //
  // The overlay tool is optimized for remote resources which allows to directly
  // integrate a remote URL instead of downloading the asset before. For an
  // example on how to download the remote resources in advance and use the local
  // downloaded resources, see: src/examples/text/addFonts/fromRemoteURL.
  const configuration: Configuration = {
    overlay: {
      items: [
        // highlight-custom-overlay
        {
          identifier: "custom_overlay",
          name: "Custom",
          defaultBlendMode: BlendMode.OVERLAY,
          overlayURI:
            "https://img.ly/static/example-assets/imgly_overlay_grain.jpg",
        },
        // highlight-custom-overlay
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
