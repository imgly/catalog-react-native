import { Configuration, PESDK } from "react-native-photoeditorsdk";

export const photoTransformConfigurationExample = async (): Promise<void> => {
  // Add a photo from the assets directory.
  const photo = require("../../../../assets/pesdk/LA.jpg");

  // Create a `Configuration` object.
  const configuration: Configuration = {
    transform: {
      // By default the editor has a lot of crop aspects enabled.
      // For this example only a couple are enabled, e.g. if you
      // only allow certain image aspects in your application.
      // highlight-crop-ratios
      items: [
        {
          width: 1,
          height: 1,
        },
        {
          width: 19,
          height: 9,
          name: "Landscape",
        },
      ],
      // highlight-crop-ratios

      // By default the editor allows to use a free crop ratio.
      // For this example this is disabled to ensure that the image
      // has a suitable ratio.
      // highlight-free-crop
      allowFreeCrop: false,
      // highlight-free-crop

      // By default the editor shows the reset button which resets
      // the applied transform operations. In this example the button
      // is hidden since we are enforcing certain ratios and the user
      // can only select among them anyway.
      // highlight-reset-button
      showResetButton: false,
      // highlight-reset-button
    },

    // For this example the user is forced to crop the asset to one of
    // the allowed crop aspects specified above, before being able to use other
    // features of the editor. The transform tool will only be presented
    // if the image does not already fit one of those allowed aspect ratios.
    // highlight-force-crop
    forceCrop: true,
    // highlight-force-crop
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
