import { Configuration, VESDK } from "react-native-videoeditorsdk";

export const VideoSnappingConfigurationExample = async (): Promise<void> => {
  // Add a video from the assets directory.
  const video = require("../../../../assets/vesdk/Skater.mp4");

  // Create a `Configuration` object.
  const configuration: Configuration = {
    // For this example the editor's snapping behavior is configured
    // to act as a guide for the user to see where the sprites should
    // be placed. A use case could be that an application displays
    // the videos both in rectangular as well as in circular
    // shapes which requires the editor to indicate where the area
    // is in which sprites' visibility is best.
    snapping: {
      rotation: {
        // By default the snapping is enabled when rotating a sprite.
        // For this example this behavior is disabled since only the
        // outer positional snapping guides are needed.
        // highlight-rotation
        enabled: false,
        // highlight-rotation
      },

      position: {
        // By default the center of the sprite snaps to a vertical
        // line indicating the center of the video.
        // For this example this behavior is disabled since only the
        // outer positional snapping guides are needed.
        // highlight-vertical-line
        snapToVerticalCenter: false,
        // highlight-vertical-line

        // By default the center of the sprite snaps to a horizontal
        // line indicating the center of the video.
        // For this example this behavior is disabled since only the
        // outer positional snapping guides are needed.
        // highlight-horizontal-line
        snapToHorizontalCenter: false,
        // highlight-horizontal-line

        // By default the sprite snaps to a horizontal line
        // on the bottom of the video. This value is measured in normalized
        // coordinates relative to the smaller side of the edited video and
        // defaults to 10% (0.1).
        // For this example the value is set to 15% (0.15) to define the
        // visibility area of the video.
        // highlight-positional
        snapToBottom: 0.15,

        // By default the sprite snaps to a horizontal line
        // on the top of the video. This value is measured in normalized
        // coordinates relative to the smaller side of the edited video and
        // defaults to 10% (0.1).
        // For this example the value is set to 15% (0.15) to define the
        // visibility area of the video.
        snapToTop: 0.15,

        // By default the sprite snaps to a vertical line
        // on the left of the video. This value is measured in normalized
        // coordinates relative to the smaller side of the edited video and
        // defaults to 10% (0.1).
        // For this example the value is set to 15% (0.15) to define the
        // visibility area of the video.
        snapToLeft: 0.15,

        // By default the sprite snaps to a vertical line
        // on the right of the video. This value is measured in normalized
        // coordinates relative to the smaller side of the edited video and
        // defaults to 10% (0.1).
        // For this example the value is set to 15% (0.15) to define the
        // visibility area of the video.
        snapToRight: 0.15,
        // highlight-positional
      },
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
