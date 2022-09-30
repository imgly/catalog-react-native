import { Configuration, PESDK } from "react-native-photoeditorsdk";
import * as FileSystem from "expo-file-system";
import { setRecoil } from "recoil-nexus";
import { interactionState } from "../../../../state/interactionState";

export const photoTextRemoteURLExample = async (): Promise<void> => {
  // Add a photo from the assets directory.
  const photo = require("../../../../../assets/pesdk/LA.jpg");

  // Disable user interaction while the download is active. In production you would
  // want to show a progress indicator for example.
  // highlight-user-interaction
  setRecoil(interactionState, false);
  // highlight-user-interaction

  try {
    // highlight-download
    const fontURL =
      "https://img.ly/static/example-assets/custom_font_raleway_regular.ttf";

    const downloadResult = await FileSystem.downloadAsync(
      fontURL,
      FileSystem.cacheDirectory + "custom_font_raleway_regular.ttf"
    );
    // highlight-download

    // Create a `Configuration` object.
    // highlight-configuration
    const configuration: Configuration = {
      text: {
        fonts: [
          // A custom font.
          {
            identifier: "custom_font_raleway_regular",
            name: "Raleway",
            fontName: "custom_font_raleway_regular",
            fontURI: downloadResult.uri,
          },
        ],
      },
    };
    // highlight-configuration

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
  } finally {
    // Reenable user interaction. In production you would want to dismiss a
    // progress indicator for example.
    // highlight-user-interaction
    setRecoil(interactionState, true);
    // highlight-user-interaction
  }
};
