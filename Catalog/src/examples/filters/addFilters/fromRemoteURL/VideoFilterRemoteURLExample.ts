import { Configuration, VESDK } from "react-native-videoeditorsdk";
import * as FileSystem from "expo-file-system";
import { setRecoil } from "recoil-nexus";
import { interactionState } from "../../../../state/interactionState";

export const videoFilterRemoteURLExample = async (): Promise<void> => {
  // Add a video from the assets directory.
  const video = require("../../../../../assets/vesdk/Skater.mp4");

  // Download promises of remote assets.
  // highlight-download
  const filterPromise = FileSystem.downloadAsync(
    "https://img.ly/static/example-assets/custom_lut_invert.png",
    FileSystem.cacheDirectory + "custom_lut_invert.png"
  );

  const thumbnailPromise = FileSystem.downloadAsync(
    "https://img.ly/static/example-assets/custom_filter_category.jpg",
    FileSystem.cacheDirectory + "custom_filter_category.jpg"
  );
  // highlight-download

  // Disable user interaction while the download is active. In production you would
  // want to show a progress indicator for example.
  // highlight-user-interaction
  setRecoil(interactionState, false);
  // highlight-user-interaction

  try {
    // Download the remote resources.
    // highlight-download
    const downloads = await Promise.all([filterPromise, thumbnailPromise]);
    // highlight-download

    // Create a `Configuration` object.
    const configuration: Configuration = {
      filter: {
        // highlight-filters
        categories: [
          // A custom `FilterCategory`.
          {
            identifier: "custom",
            name: "Custom",
            thumbnailURI: downloads[1].uri,
            items: [
              // A custom `LUTFilter`.
              {
                identifier: "custom_lut_filter",
                name: "Custom LUT",
                lutURI: downloads[0].uri,
              },
            ],
          },
        ],
        // highlight-filters
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
  } finally {
    // Reenable user interaction. In production you would want to dismiss a
    // progress indicator for example.
    // highlight-user-interaction
    setRecoil(interactionState, true);
    // highlight-user-interaction
  }
};
