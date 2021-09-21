import React from 'react';
// Import the App component so we can reuse the code from that component in this component.
import App from '../src/App.js';

// A functional component called: index. Home will be the rout of our site.
function index() {
  return <App pageName="Home" />;
}

export default index;
