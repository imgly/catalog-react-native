import { Configuration } from "react-native-videoeditorsdk";

// <giphy-category>
const configuration: Configuration = {
    sticker: {
        categories: [
            {
                identifier: "imgly_sticker_category_giphy",
                provider: {
                    apiKey: "YOUR-API-KEY"
                }
            }
        ]
    }
}
// <giphy-category>