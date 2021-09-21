import React from 'react';
import Home from './Home.js';

// Takes in just one descrutured property and that's the: pageName.
// Will be switching between functional and lambda syntax for components.
// We only going to have a Home and a Speakers page so we need a conditional for each.
// For now it returns just empty React fragment/null: <></>
// Home is passed in as a receiving prop, we currently returning a set of empty fragment.
const App = ({ pageName }) => {
  if (pageName === 'Home') return <Home></Home>;
  if (pageName === 'Speakers') return <></>;
  return <div>Not Found</div>;
};
// Export this component to be able to reuse the code in other components.
export default App;
