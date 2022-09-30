import { Configuration } from "react-native-videoeditorsdk";

// <code-example-static-frames>
const staticFrameConfiguration: Configuration = {
    frame: {
        items: [
            {
                identifier: "custom_frame",
                thumbnailURI: require('../../../../assets/frames/imgly_frame_lowpoly_thumbnail.png'),
                imageGroups: {
                    top: {
                        midURI: require('../../../../assets/frames/imgly_frame_lowpoly_top.png'),
                        startURI: require('../../../../assets/frames/imgly_frame_lowpoly_top_left.png'),
                        endURI: require('../../../../assets/frames/imgly_frame_lowpoly_top_right.png')
                    },
                    left: {
                        midURI: require('../../../../assets/frames/imgly_frame_lowpoly_left.png'),
                    },
                    right: {
                        midURI: require('../../../../assets/frames/imgly_frame_lowpoly_right.png'),
                    },
                    bottom: {
                        midURI: require('../../../../assets/frames/imgly_frame_lowpoly_bottom.png'),
                        startURI: require('../../../../assets/frames/imgly_frame_lowpoly_bottom_left.png'),
                        endURI: require('../../../../assets/frames/imgly_frame_lowpoly_bottom_right.png')
                    }
                }
            }
        ]
    }
}
// <code-example-static-frames>

// <code-example-dynamic-frames>
const dynamicFrameConfiguration: Configuration = {
    frame: {
        
    }
}
// <code-example-dynamic-frames>