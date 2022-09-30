import {
  Configuration,
  FrameLayoutMode,
  FrameTileMode,
  VESDK,
} from "react-native-videoeditorsdk";

export const videoFramesAppBundleExample = async (): Promise<void> => {
  try {
    // Add a video from the assets directory.
    const video = require("../../../../../assets/vesdk/Skater.mp4");
    
    // Create a `Configuration` object.
    const configuration: Configuration = {
      frame: {
        items: [
          {
            // highlight-basic
            identifier: "custom_frame",
            name: "Custom",
            thumbnailURI: require("../../../../../assets/frames/imgly_frame_lowpoly_thumbnail.png"),
            layoutMode: FrameLayoutMode.HORIZONTAL_INSIDE,
            relativeScale: 0.1,
            // highlight-basic
            // highlight-groups
            imageGroups: {
              top: {
                midURI: require("../../../../../assets/frames/imgly_frame_lowpoly_top.png"),
                startURI: require("../../../../../assets/frames/imgly_frame_lowpoly_top_left.png"),
                endURI: require("../../../../../assets/frames/imgly_frame_lowpoly_top_right.png"),
                // highlight-mid-mode
                midMode: FrameTileMode.STRETCH,
                // highlight-mid-mode
              },
              left: {
                midURI: require("../../../../../assets/frames/imgly_frame_lowpoly_left.png"),
                // highlight-mid-mode
                midMode: FrameTileMode.STRETCH,
                // highlight-mid-mode
              },
              right: {
                midURI: require("../../../../../assets/frames/imgly_frame_lowpoly_right.png"),
                // highlight-mid-mode
                midMode: FrameTileMode.STRETCH,
                // highlight-mid-mode
              },
              bottom: {
                midURI: require("../../../../../assets/frames/imgly_frame_lowpoly_bottom.png"),
                startURI: require("../../../../../assets/frames/imgly_frame_lowpoly_bottom_left.png"),
                endURI: require("../../../../../assets/frames/imgly_frame_lowpoly_bottom_right.png"),
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
