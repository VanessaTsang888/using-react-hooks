/* 

Program a hover-over effect that turns a black & white image to colour when user hovers over it/mouse over it and back to b&w when user hovers out of it.
1. Create a new JS file named: 'ImageChangeOnMouseOver' in our pages directory. The name of that file becomes our url route (the rooute file) when user browse to the site.
2. Write a simple React functional component called: 'ImageChangeOnMouseOver', with 2 image elements, that each point to their own b&w pic.
3. Set the 2-source attributes to two separate b&w images - our base page: 'primaryImg' and 'econdaryImg'. 
Then assign them the speakers img using the path for them. 
4. cmd: npn run dev -> localhost:3000 -> will see the 2 b&w images.

'/static/speakers/bw/Speaker-187.jpg'


*/

import React from "react";
// Reference the new component in our pages folder:
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver
        primaryImg='/static/speakers/bw/Speaker-187.jpg'
        secondaryImg='/static/speakers/Speaker-187.jpg'
        alt=''
      />
      &nbsp;&nbsp;&nbsp;
      <ImageToggleOnMouseOver
        primaryImg='/static/speakers/bw/Speaker-1124.jpg'
        secondaryImg='/static/speakers/Speaker-1124.jpg'
        alt=''
      />
    </div>
  );
};

export default ImageChangeOnMouseOver;
