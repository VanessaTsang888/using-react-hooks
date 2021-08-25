/* 

Show colorising when the mouse enters and leaves each image with new code that displays images in a vertical list so wehave something to scroll.

Writing a JS expression with speaker id allows us to dynamically use the speaker images within the speakers folder. Then maps will iterate over them.
Each ID then gets it's own 'ImageToggleOnScroll' component rendered and because they are separated by divs they stack vertically.

*/

import React from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const ImageChangeOnScroll = () => {
  return (
    <div>
      {[1124, 187, 823, 1269, 1530].map((speakerId) => {
        return (
          <div key={speakerId}>
            <ImageToggleOnScroll
              primaryImg={`/static/speakers/bw/Speaker-${speakerId}.jpg`}
              secondaryImg={`/static/speakers/Speaker-${speakerId}.jpg`}
              alt=''
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageChangeOnScroll;
