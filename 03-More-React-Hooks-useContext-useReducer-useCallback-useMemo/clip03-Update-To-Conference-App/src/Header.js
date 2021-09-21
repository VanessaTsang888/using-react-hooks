import React from 'react';
import SignMeUp from './SignMeUp';
{/* Local signup callback function, takes in email as the argument, jsut logout to console to test it.
Then we can build the SignMeUp Component */}
export const Header = () => {
  const signupCallback = (email) => {
    return console.log(`sign up called with email ${email}`);
  };
{/* Some Bootstrap code for this functional component including the Jumbotron Boostrap class and pull in the Code Camp logo */}
{/* Reference a new component, SignMeUp which has a single attribute,  */}
  return (
    <div className="jumbotron jumbotronheight">
      <div className="row">
        <div className="col-12 col-sm-4 text-center">
          <h6 className="text-uppercase">October 19-20 2019</h6>
          <h6 className="text-uppercase">San Jose, California</h6>
        </div>
        <div className="col-12 col-sm-8 text-lg-right">
          <div>
            <img src="/static/SVCClogo.png" /> {/* pull in the Code Camp logo */}
          </div>
          <h2>Silicon Valley Code Camp</h2>
          <div className="row col-12 text-lg-right">
            <SignMeUp signupCallback={signupCallback} /> {/* Reference the SignMeUp component */}
          </div>
        </div>
      </div>
    </div>
  );
};
