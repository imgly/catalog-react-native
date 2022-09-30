import { Configuration, PESDK } from "react-native-photoeditorsdk";

export const photoFilterAppBundleExample = async (): Promise<void> => {
  // Add a photo from the assets directory.
  const photo = require("../../../../../assets/pesdk/LA.jpg");

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
