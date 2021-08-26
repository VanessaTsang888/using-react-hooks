/* Show colorising when the mouse enters and leaves each image with new code that displays images in a vertical list so wehave something to scroll. 

Writing a JS expression with speaker id allows us to dynamically use the speaker images within the speakers folder. Then maps will iterate over them.
Each ID then gets it's own 'ImageToggleOnScroll' component rendered and because they are separated by divs they stack vertically. */

// To add a 'moseover event' to every speaker image that sets the title of our browser window to the speaker ID, need to maintain in state what the
// current mouseover speak ID is so need to create that state -> useState Hook:
import React, { useState, useEffect } from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const ImageChangeOnScroll = () => {
  /* state instant to maintain in state what the current mouseover speak ID is. Then I can add a 'moseover event' to every speaker image that sets the
  title of the user's browser window to the speaker ID. Initialise useState to '0' */
  const [currentSpeakerId, setCurrentSpeakerId] = useState(0);
  // Need a State to create a counter at top of app that displays the total number of mouse events that have occurred while the app is running.
  const [mouseEventCnt, setMouseEventCnt] = useState(0);
  // In the onMouseOver event, increment the counter. Then in the return, output that value using span element/tag.
  /* Listen for the mouseover event. Mouseover event execution - calling 'setCurrentSpeakerId' to the current speaker that this image component renders.
  Console.log that speaker ID as changes is invisible to the UI and I need know what happens when I test this event by mouseover an image. */
  // Assign the fn inside useEffect Hook to window.document.title of the browser.
  /* The dependency array in the useEffect Hook allow us to keep useEffect from being called when it wasn't necessary, i.e. mouse over and out multiple time on the same speaker image
  shouldn't call useEffect over and over again as its the same speaker ID */
  useEffect(() => {
    window.document.title = `SpeakerId: ${currentSpeakerId}`;
    console.log(`useEffect: setting title to ${currentSpeakerId}`);
  }, [currentSpeakerId]);
  return (
    <div>
      {/* Output the counter value that is inside the onMouseOver attribute */}
      <span>mouseEventCnt: {mouseEventCnt}</span>
      {[1124, 187, 823, 1269, 1530].map((speakerId) => {
        return (
          <div
            key={speakerId}
            onMouseOver={() => {
              setCurrentSpeakerId(speakerId);
              setMouseEventCnt(mouseEventCnt + 1);
              console.log(`onMouseOver:${speakerId}`);
            }}>
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
