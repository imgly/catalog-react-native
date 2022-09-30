import {
  Configuration,
  PESDK,
  SerializationExportType,
} from "react-native-photoeditorsdk";

export const photoSerializationExample = async (): Promise<void> => {
  // Add a photo from the assets directory.
  const photo = require("../../../../assets/pesdk/LA.jpg");

  // Create a `Configuration` object.
  // highlight-serialization
  const configuration: Configuration = {
    export: {
      serialization: {
        // Enable the serialization feature.
        enabled: true,

        // For this example, the serialization should be returned
        // as an object to simply logging it in the console.
        exportType: SerializationExportType.OBJECT,
      },
    },
  };
  // highlight-serialization

  try {
    // Open the photo editor and handle the export as well as any occuring errors.
    // highlight-open-editor
    const result = await PESDK.openEditor(photo, configuration);
    // highlight-open-editor

    if (result != null) {
      // The user exported a new photo successfully and the newly generated photo is located at `result.image`
      // and the serialization is located at `result.serialization`.
      // highlight-usage
      console.log(result.serialization);
      // highlight-usage
    } else {
      // The user tapped on the cancel button within the editor.
      return;
    }
  } catch (error) {
    // There was an error generating the photo.
    console.log(error);
  }
};
