import { CanvasAction, Configuration } from "react-native-photoeditorsdk";

// <code-example-background-removal>
const configuration: Configuration = {
  mainCanvasActions: [
    CanvasAction.UNDO,
    CanvasAction.REDO,
    CanvasAction.REMOVE_BACKGROUND,
  ],
};
// <code-example-background-removal>
