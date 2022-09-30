import { Configuration, PESDK } from "react-native-photoeditorsdk";

export const photoFilterConfgirationExample = async (): Promise<void> => {
  // Add a photo from the assets directory.
  const photo = require("../../../../assets/pesdk/LA.jpg");

  // Create a `Configuration` object.
  const configuration: Configuration = {
    filter: {
      // By default, the filters are grouped according to the filter
      // categories passed to the configuration. In this example,
      // the filter grouping is disabled so that all
      // available filters will be displayed separately.
      // highlight-flatten
      flattenCategories: true,
      // highlight-flatten
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
