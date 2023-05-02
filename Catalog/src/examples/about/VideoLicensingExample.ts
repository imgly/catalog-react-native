import { VESDK } from "react-native-videoeditorsdk";

async function unlock() {
  // <code-example-vesdk-license>
  const license = require("./vesdk_license");

  try {
    await VESDK.unlockWithLicense(license);
  } catch (error) {
    console.log(`Failed to unlock VE.SDK with error: ${error}.`);
  }
  // <code-example-vesdk-license>
}
