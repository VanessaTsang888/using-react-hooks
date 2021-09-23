import React, { useState } from 'react';
// This functional component takes in one receiving prop and a function called signup callback.
// It's going to return a Bootstrap container that incl. an input field to receive an email address, a button that when the
// email address is valid is enabled so that clicking it executes some backend code.
// Write useState Hook email and setEmail to track what the user enters into the input field.
// Set the value of the input to email, and to the onChange event, assign the input value as the user enters text.
// For the button, set the disabled property to reflect as simple email valid rule, and that's just as the text include the @ symbol.
// Add an onClick listener to the button that calls the passed-in property fn, signuCallback, with the current email.
// Then clears the input field and alert to confirmation message to the browser.
// Now we have a simple signup form component that's embedded in our site header component.
//
const SignMeUp = ({ signupCallback }) => {
  const [email, setEmail] = useState('');

  return (
    <div className="container">
      <div>
        <div className="content">
          <input
            placeholder="Enter Email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              {
                /* and to the onChange event, assign the input value as the user enters text */
              }
            }}
          />
          &nbsp;
          <button
            disabled={!email.includes('@')}
            onClick={() => {
              /* onClick listener to the button that calls the passed-in property fn, signu Callback */
              signupCallback(email);
              {
                /* with the current email */
              }
              setEmail('');
              alert('signup confirmed');
              {
                /* clear input field, alert to confirmation message to the browser */
              }
            }}
            className="btn"
            type="submit"
          >
            Get Updates
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignMeUp;
