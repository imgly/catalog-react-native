// highlight-import
import * as MediaLibrary from "expo-media-library";
// highlight-import
import * as FileSystem from "expo-file-system";
import { Configuration, ImageFormat, PESDK } from "react-native-photoeditorsdk";
import { Platform } from "react-native";

export const savePhotoCameraRollExample = async (): Promise<void> => {
  // Add a photo from the assets directory.
  const photo = require("../../../../assets/pesdk/LA.jpg");

  try {
    // Create a `Configuration` object.
    // Since this example is using `expo-file-system` to remove the exported video later,
    // we need to export the video in one of the two directories that are supported by this module.
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
    const result = await PESDK.openEditor(photo, configuration);

    if (result != null) {
      // The user exported a new photo successfully and the newly generated photo is located at `result.image`.
      // For this example, the image is saved into the camera roll of the device.
      // First, request the permissions for the camera roll.
      // highlight-camera-roll
      await MediaLibrary.requestPermissionsAsync();
      // highlight-camera-roll
      // Then, save the image to the library.
      // highlight-camera-roll
      await MediaLibrary.saveToLibraryAsync(result.image);
      // highlight-camera-roll

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
