import { Configuration, TintMode } from "react-native-videoeditorsdk";

// <smart-stickers>
const configuration: Configuration = {
  sticker: {
    categories: [
      {
        identifier: "custom",
        thumbnailURI: require('../../../../assets/custom_sticker_igor.png'),
        name: "Smart",
        items: [
          { identifier: "imgly_smart_sticker_weekday" },
          { identifier: "imgly_smart_sticker_date" },
          { identifier: "imgly_smart_sticker_time" },
          { identifier: "imgly_smart_sticker_time_clock" },
        ],
      },
    ],
  },
};
// <smart-stickers>
