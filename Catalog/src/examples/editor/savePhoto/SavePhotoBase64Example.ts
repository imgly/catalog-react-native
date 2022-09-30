// highlight-import
import * as FileSystem from "expo-file-system";
// highlight-import
import { Platform } from "react-native";
import { Configuration, ImageFormat, PESDK } from "react-native-photoeditorsdk";

export const savePhotoBase64Example = async (): Promise<void> => {
  // Add a photo from the assets directory.
  const photo = require("../../../../assets/pesdk/LA.jpg");

  try {
    // Create a `Configuration` object.
    // Since this example is using `expo-file-system` to remove the exported photo later,
    // we need to export the photo in one of the two directories that are supported by this module.
    // For further reference, please have a look at the official documentation here:
    // https://docs.expo.dev/versions/latest/sdk/filesystem/#directories
    // highlight-configuration
    const configuration: Configuration = {
      export: {
        filename:
          FileSystem.cacheDirectory +
          `export${Platform.OS == "android" ? ".png" : ""}`,
        image: {
          format: ImageFormat.PNG,
        },
      },
    };
    // highlight-configuration

    // Open the photo editor and handle the export as well as any occuring errors.
    // highlight-result
    const result = await PESDK.openEditor(photo, configuration);

    if (result != null) {
      // The user exported a new photo successfully and the newly generated photo is located at `result.image`.
      // For this example, the photo is encoded in Base64.
      const base64 = await FileSystem.readAsStringAsync(result.image, {
        encoding: "base64",
      });
      // highlight-result

      console.log(
        `Received Base64 encoded string with ${base64.length} characters.`
      );

      // Delete the temporary export file only after the saving process has finished,
      // to be able to access it again in case anything went wrong while uploading
      // the photo.
      // highlight-delete
      return FileSystem.deleteAsync(result.image);
      // highlight-delete
    } else {
      // The user tapped on the cancel button within the editor.
      return;
    }
  } catch (error) {
    // There was an error generating the photo.
    console.log(error);
  }
};
