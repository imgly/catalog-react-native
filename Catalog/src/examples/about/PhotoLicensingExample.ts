import { PESDK } from "react-native-photoeditorsdk";

function unlock() {
  // <code-example-pesdk-license>
  const license = require("./license");

  PESDK.unlockWithLicense(license);
  // <code-example-pesdk-license>
}
