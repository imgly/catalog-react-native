import { PESDK } from "react-native-photoeditorsdk";

async function unlock() {
  // <code-example-pesdk-license>
  const license = require("./pesdk_license");

  try {
    await PESDK.unlockWithLicense(license);
  } catch (error) {
    console.log(`Failed to unlock PE.SDK with error: ${error}.`);
  }
  // <code-example-pesdk-license>
}
