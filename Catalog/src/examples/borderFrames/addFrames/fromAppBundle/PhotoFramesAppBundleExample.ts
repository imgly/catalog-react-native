import {
  Configuration,
  FrameLayoutMode,
  FrameTileMode,
  PESDK,
} from "react-native-photoeditorsdk";

export const photoFramesAppBundleExample = async (): Promise<void> => {
  try {
    // Add a photo from the assets directory.
    const photo = require("../../../../../assets/pesdk/LA.jpg");

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

    // Open the photo editor and handle the export as well as any occuring errors.
    const result = await PESDK.openEditor(photo, configuration);

    if (result != null) {
      // The user exported a new photo successfully and the newly generated photo is located at `result.image`.
      console.log(result.image);
    } else {
      // The user tapped on the cancel button within the editor.
      return;
    }
  } catch (error) {
    // There was an error generating the photo.
    console.log(error);
  }
};
