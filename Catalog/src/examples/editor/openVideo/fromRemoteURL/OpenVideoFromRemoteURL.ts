import { VESDK } from "react-native-videoeditorsdk";
import * as FileSystem from "expo-file-system";
import { interactionState } from "../../../../state/interactionState";
import { setRecoil } from "recoil-nexus";

export const openVideoFromRemoteURLExample = async (): Promise<void> => {
  // Although the editor supports opening a remote URL, we highly recommend
  // that you manage the download of the remote resource yourself, since this
  // gives you more control over the whole process. After successfully downloading
  // the file you should pass a local URL to the downloaded video to the editor.
  // This example demonstrates how to achieve this.
  const remoteURL = "https://img.ly/static/example-assets/Skater.mp4";

  // Disable user interaction while the download is active. In production you would
  // want to show a progress indicator for example.
  // highlight-user-interaction
  setRecoil(interactionState, false);
  // highlight-user-interaction

  try {
    // Download the video.
    // highlight-download
    const { uri } = await FileSystem.downloadAsync(
      remoteURL,
      FileSystem.documentDirectory + "Skater.mp4"
    );
    // highlight-download

    // Open the video editor and handle the export as well as any occuring errors.
    // highlight-open-editor
    const result = await VESDK.openEditor(uri);

    if (result != null) {
      // The user exported a new video successfully and the newly generated video is located at `result.video`.
      console.log(result?.video);
    } else {
      // The user tapped on the cancel button within the editor.
      return;
    }
  } catch (error) {
    // There was an error downloading/exporting the video.
    console.log(error);
    // highlight-open-editor
  } finally {
    // Reenable user interaction. In production you would want to dismiss a
    // progress indicator for example.
    // highlight-user-interaction
    setRecoil(interactionState, true);
    // highlight-user-interaction
  }
};
