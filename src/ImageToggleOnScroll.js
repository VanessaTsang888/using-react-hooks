/* 

Colourising on Scroll based on if the photos is in full view of the browser and allow for scrolling to trigger the calculation to determin that.
The first parameter in this hook is a function that gets exectuted when the component mounts, which we have to remove before the component unmounts,
so the return function inside this arrow function removes the listener.
The second parameter within useEffect function is an array that contains dependancies. Since don't need to add and remove the scroll listeners on every
component updates, can use an empty array which tells useEffect to only run when the component is first rendered.
Track if image is completely in the broswer showing window. By default let's say we have a large list of images and they are not inview.
So we use 'false' for the initial setting.
Reference the useEffect and useState Hooks in the import statement.
We use the: ref attribute (ref={}) to figure out where on page the image is.
Code the scroll handler to set the inView state based on whether the image is actually in view. Each time the page scrolls, this is calculated again.

Set the src attribute of image to sow a color image when this when this image component is in view and a black and white image one when it is not.
Primary image = b&w, secondary image is color.

Improving & Fixing Our Scrolling Colourising issues: The pages loaded all images showed as b&w instead of the ones fully in view in colour and rest in b&w.
Once we scrolled down the page, everything was good, but not the initial display.
After we setup imageRef and setup useEffect call, we create the inView state using useState and set the default value to false, which means the image is
not in view and the images should display in b&w. After the image renders the first time, we never check to see if it's in view. To fix this, within useEffect
a call to the state setter 'setInView', that calls 'isInView' when the component first mounts. 
useEffect gets called after the DOM is fully constructed and the component is rendered, set isLoading to false. This state change will allow React to react and do
another render but this time with isLoading set to false.

*/

import React, { useEffect, useRef, useState } from "react";

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null);
  /* Add state: isLoading as useEffect fn runs after the first render is completed, and in this component we set the default image to b&w.
  To fix this, need to show the image when component first runs as the DOM has not been constructed and we don't know yet whether this image will
  be in view or not. */
  const [isLoading, setIsLoading] = useState(true);

  /* Two line function isInView that returns whether the image is showing in the scrollable area or not. getBoundingClientREact combined with the size of the
  image retangle works for us. */
  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  /* track if image is completely in the broswer showing window. By default let's say we have a large list of images and they are not inview.
  So we use 'false' for the initial setting. */
  const [inView, setInView] = useState(false);

  // Add 'scroll event listener' by adding the useEffect Hook when the component first mounts.
  useEffect(() => {
    // Set 'isLoading' to false. This state change will allow React to react and do another render but this time with 'isLoading' set to false:
    setIsLoading(false);
    // On initial page render, set the images in view to the colour images:
    setInView(isInView());
    window.addEventListener("scroll", scrollHandler);
    // the return function inside this arrow function removes the listener:
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  // Scroll handler to set the inView state based on whether the image is actually in view. Each time the page scrolls, this is calculated again.
  const scrollHandler = () => {
    setInView(isInView());
  };

  /* Check in the img element source tag for 'isLoading'. Ternary expression that overrides displaying the secondary and primary images with a transpartent
  GIF if 'isLoading' is true */
  /* Set the src attribute of image to sow a color image when this when this image component is in view and a black and white image one when it is not.
  Primary image = b&w, secondary image is color. */
  return (
    <img
      src={
        isLoading
          ? "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          : inView
          ? secondaryImg
          : primaryImg
      }
      alt=''
      ref={imageRef}
    />
  );
};

export default ImageToggleOnScroll;
