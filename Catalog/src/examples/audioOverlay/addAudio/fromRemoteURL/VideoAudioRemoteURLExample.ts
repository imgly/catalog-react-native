import { AudioClip, Configuration, VESDK } from "react-native-videoeditorsdk";
import * as FileSystem from "expo-file-system";
import { setRecoil } from "recoil-nexus";
import { interactionState } from "../../../../state/interactionState";

export const videoAudioRemoteURLExample = async (): Promise<void> => {
  // Add a video from the assets directory.
  const video = require("../../../../../assets/vesdk/Skater.mp4");

  // Identifiers of the audio clips.
  // highlight-download
  const audioIdentifiers = [
    "elsewhere",
    "trapped_in_the_upside_down",
    "dance_harder",
    "far_from_home",
  ];

  // Download promises of remote assets.
  var promises: Promise<FileSystem.FileSystemDownloadResult>[] = [];

  audioIdentifiers.forEach((identifier) => {
    const remoteURL = `https://img.ly/static/example-assets/${identifier}.mp3`;
    const downloadPromise = FileSystem.downloadAsync(
      remoteURL,
      FileSystem.cacheDirectory + identifier + ".mp3"
    );
    promises.push(downloadPromise);
  });
  // highlight-download

  // Disable user interaction while the download is active. In production you would
  // want to show a progress indicator for example.
  // highlight-user-interaction
  setRecoil(interactionState, false);
  // highlight-user-interaction

  try {
    // Download the remote resources.
    // highlight-download
    const downloads = await Promise.all(promises);
    // highlight-download

    // The processed `AudioClip`s.
    // highlight-process
    var audioClips: AudioClip[] = [];

    // Process the downloaded audio clips.
    downloads.forEach((download, index) => {
      const uri = download.uri;
      const identifier = audioIdentifiers[index];

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
  } finally {
    // Reenable user interaction. In production you would want to dismiss a
    // progress indicator for example.
    // highlight-user-interaction
    setRecoil(interactionState, true);
    // highlight-user-interaction
  }
};
