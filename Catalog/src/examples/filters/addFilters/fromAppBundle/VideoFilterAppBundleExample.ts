import { Configuration, VESDK } from "react-native-videoeditorsdk";

export const videoFilterAppBundleExample = async (): Promise<void> => {
  // Add a video from the assets directory.
  const video = require("../../../../../assets/vesdk/Skater.mp4");

  // Create a `Configuration` object.
  const configuration: Configuration = {
    filter: {
      categories: [
        // highlight-category
        {
          identifier: "custom_filter_group",
          name: "Custom",
          thumbnailURI: require("../../../../../assets/custom_filter_category.jpg"),
          items: [
            // highlight-custom-filter
            // A custom LUT Filter.
            {
              identifier: "custom_lut_filter",
              name: "Custom LUT",
              lutURI: require("../../../../../assets/custom_lut_invert.png"),
            },
            // A custom DuoTone Filter.
            {
              identifier: "custom_duotone_filter",
              name: "Custom DuoTone",
              darkColor: "#002259",
              lightColor: "#bd66ff",
            },
            // highlight-custom-filter
          ],
        },
        // highlight-category
        // highlight-existing
        { identifier: "imgly_filter_category_bw" },
        // highlight-existing
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
