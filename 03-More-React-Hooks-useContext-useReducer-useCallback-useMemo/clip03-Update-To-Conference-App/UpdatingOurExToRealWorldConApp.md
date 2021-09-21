MY NOTES:

Updating Our Examples to a Real-world React App:

   -> Will be using the basic Hooks plus these more complex ones on our Conferance website with a Home and a Speakers pages:
   - useContext
   - useReducer
   - useCallback
   - useMeno
     Our conference website will allow for nav, routing between Home and Speakers page. The Favourite Speaker functionality will be programmed
     into the Speakers page. User can click on the heart symbol and it toggles to on/off bright to dark red -> onScroll event. Will use the 3 Hooks to
     develop this: useState, useRef, useEffect.
     Start with updating the Next.js app. Build the Home page including the Bootstrap for responsive design, basic header, menu, some home page text.
     Next clip, we'll bring in the Speakers page.

Files to update:
    1. _app.js
    2. App.js
    3. speakers.js
    4. index.js

Code our Menu component thatlets us swich between our Home and Speakers pages. 
Home page includes a common menu and header.

To test our App so far use this command: npm run dev