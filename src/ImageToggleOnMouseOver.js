import React, { useRef } from "react";

// Event attributes -> onMouseOver={() => {}}
// The native image source attribute. That is where the React Hook useRef comes in. We create and declare a constant called 'imageRef'.
// Handle the 'onMouseOver' and 'onMouseOut' events from our img element, so add them to to the rendered image element. When these events get triggered the native
// image source will get swapped. This is where the React Hook useRef comes in. This is why we declare a constant: imageRef, declare that constant by calling the
// Hook useRef in the import statement.
// When this component gets rendered it assigns imageRef to our constant and now can access imageRef.current to get to our image attributes.

const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg }) => {
  // Our JS is using our Reference 'imageRef' from 'useRef' to assign a new image to the element by reassigning the source attribute.
  //  Reference the useRef in the import statement.

  const imageRef = useRef(null);

  // Swapping images in the change events:
  return (
    <img
      onMouseOver={() => {
        imageRef.current.src = secondaryImg;
      }}
      onMouseOut={() => {
        imageRef.current.src = primaryImg;
      }}
      src={primaryImg}
      alt=''
      ref={imageRef}
    />
  );
};

export default ImageToggleOnMouseOver;
