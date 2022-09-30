import { VESDK } from "react-native-videoeditorsdk";

function unlock() {
  // <code-example-vesdk-license>
  const license = require("./license");

  VESDK.unlockWithLicense(license);
  // <code-example-vesdk-license>
}
