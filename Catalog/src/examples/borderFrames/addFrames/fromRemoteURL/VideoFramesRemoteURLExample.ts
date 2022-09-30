import {
  Configuration,
  FrameLayoutMode,
  FrameTileMode,
  VESDK,
} from "react-native-videoeditorsdk";

export const videoFramesRemoteURLExample = async (): Promise<void> => {
  try {
    // Add a video from the assets directory.
    const video = require("../../../../../assets/vesdk/Skater.mp4");

    // For the sake of readability, the base URL of all remote URLs is
    // extracted in this example.
    const baseURL = "https://www.img.ly/static/example-assets/";

    // Create a `Configuration` object.
    //
    // The frame tool is optimized for remote resources which allows to directly
    // integrate a remote URL instead of downloading the asset before. For an
    // example on how to download the remote resources in advance and use the local
    // downloaded resources, see: src/examples/text/addFonts/fromRemoteURL.
    //
    // By default the `midMode` is set to `FrameTileMode.REPEAT` which repeats
    // the middle image to fill out the entire space.
    // For this example it is set to `FrameTileMode.STRETCH` for all image groups
    // to keep the correct pattern. In this mode, the middle image is
    // stretched to fill out the entire space.
    const configuration: Configuration = {
      frame: {
        items: [
          {
            // highlight-basic
            identifier: "custom_frame",
            name: "Custom",
            thumbnailURI: baseURL + "imgly_frame_lowpoly_thumbnail.png",
            relativeScale: 0.1,
            // highlight-basic
            // highlight-groups
            imageGroups: {
              top: {
                midURI: baseURL + "imgly_frame_lowpoly_top.png",
                startURI: baseURL + "imgly_frame_lowpoly_top_left.png",
                endURI: baseURL + "imgly_frame_lowpoly_top_right.png",
                // highlight-mid-mode
                midMode: FrameTileMode.STRETCH,
                // highlight-mid-mode
              },
              left: {
                midURI: baseURL + "imgly_frame_lowpoly_left.png",
                // highlight-mid-mode
                midMode: FrameTileMode.STRETCH,
                // highlight-mid-mode
              },
              right: {
                midURI: baseURL + "imgly_frame_lowpoly_right.png",
                // highlight-mid-mode
                midMode: FrameTileMode.STRETCH,
                // highlight-mid-mode
              },
              bottom: {
                midURI: baseURL + "imgly_frame_lowpoly_bottom.png",
                startURI: baseURL + "imgly_frame_lowpoly_bottom_left.png",
                endURI: baseURL + "imgly_frame_lowpoly_bottom_right.png",
                // highlight-mid-mode
                midMode: FrameTileMode.STRETCH,
                // highlight-mid-mode
              },
            },
            // highlight-groups
          },
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
