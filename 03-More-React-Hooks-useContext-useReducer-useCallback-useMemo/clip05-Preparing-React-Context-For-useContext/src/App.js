/* 

When we created our Speaker and Home pages, we had them both call the App component with a property to differentiate that is pageName="Speaker"
or pageName="Home". That App component is where we want to create our shared Context for the entire app as all the routes we ever plan to
make will share this App component. This allows a single root in our source directory that all our pages can share from. 

*/

import React from 'react';
import Home from './Home';
import Speakers from './Speakers';

// Create a Context for our entire app and export it so other components can import the Context to use it.
// Hooks will come in when we consume this context.
export const ConfigContext = React.createContext();

const pageToShow = (pageName) => {
  if (pageName === 'Home') return <Home />;
  if (pageName === 'Speakers') return <Speakers />;
  return <div>Not Found</div>;
};
// Wrap to show with ConfigContext.Provider that includes our configValue object. This value can be accessed from any component that's below this
// component app.
// Pass the attributes value to the provider which can be any JS object.
// This one is called 'configValue' and added an attribute to it 'showSpeakerSpeakingDays' and set that attribut to ture for now.
// Assign that to the value attribut of the ConfigContext.Provider.
// Implement config options in React app.
const configValue = {
  showSignMeUp: true,
  showSpeakerSpeakingDays: true,
};
const App = ({ pageName }) => {
  return (
    <ConfigContext.Provider value={configValue}>
      <div>{pageToShow(pageName)}</div>
    </ConfigContext.Provider>
  );
};

export default App;
