import { Image } from "react-native";
import { AudioClip, Configuration, VESDK } from "react-native-videoeditorsdk";

export const videoAudioAppBundleExample = async (): Promise<void> => {
  // Add a video from the assets directory.
  const video = require("../../../../../assets/vesdk/Skater.mp4");

  // Sources of the local audio clips.
  // highlight-process
  const audioSources = [
    require("../../../../../assets/vesdk/elsewhere.mp3"),
    require("../../../../../assets/vesdk/trapped_in_the_upside_down.mp3"),
    require("../../../../../assets/vesdk/dance_harder.mp3"),
    require("../../../../../assets/vesdk/far_from_home.mp3"),
  ];

  // The processed `AudioClip`s.
  var audioClips: AudioClip[] = [];

  // Convert the sources to valid `AudioClip`s.
  audioSources.forEach((source) => {
    const uri = Image.resolveAssetSource(source).uri;
    const prefix = "/assets/vesdk/";

    // Generate the identifier based on the prefix.
    const identifier = uri.substring(
      uri.indexOf(prefix) + prefix.length,
      uri.indexOf(".mp3")
    );

    const audioClip: AudioClip = {
      identifier: identifier,
      audioURI: uri,
    };
    audioClips.push(audioClip);
  });
  // highlight-process

  // Create a `Configuration` object.
  // highlight-configuration
  const configuration: Configuration = {
    audio: {
      categories: [
        {
          identifier: "elsewhere",
          name: "Elsewhere",
          items: audioClips.slice(0, 2),
        },
        {
          identifier: "other",
          name: "Other",
          items: audioClips.slice(2),
        },
      ],
    },
  };
  // highlight-configuration

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
