import {
  Configuration,
  ImageExportType,
  ImageFormat,
} from "react-native-photoeditorsdk";

const configuration: Configuration = {
  export: {
    // The name of the exported file.
    // This needs to be a valid URI you have write access to.
    // highlight-filename
    filename: "YOUR_VALID_FILENAME",
    // highlight-filename

    image: {
      // The image export format determines the file format in which the image should be exported.
      // In this example, the image should be exported as a PNG.
      // highlight-format
      format: ImageFormat.PNG,
      // highlight-format

      // The image export qualiry determines the quality in which the image should be exported.
      // In this example, the image should only have an output quality of 50%.
      // highlight-quality
      quality: 0.5,
      // highlight-quality

      // The image export type determines the type in which the image should be exported.
      // In this example, the image should be exported to a file to ease further processing.
      // highlight-type
      exportType: ImageExportType.FILE_URL,
      // highlight-type
    },
  },
};
