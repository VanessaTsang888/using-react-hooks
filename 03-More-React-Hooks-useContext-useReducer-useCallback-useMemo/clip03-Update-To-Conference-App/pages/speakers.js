/*
Create our Speakers route here.

*/


import React from 'react';
import App from '../src/App';
//
// My App component will return the App component with 'pageName -> Speakers'.
function speakers() {
  return <App pageName="Speakers" />;
}
// Need to export this reusable code to use in other components.
export default speakers;
