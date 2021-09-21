import React from 'react';
import { Header } from './Header';
import { Menu } from './Menu';

// Render an unwritten Header and Menu component and then output some Bootstrap formatted text.
function index() {
  return (
    <div>
      <Header />
      <Menu />
{/* Bootstrap formatted text */}
      <div className="container">
        <div className="row">
          <div className="col margintopbottom">
            <h2>Home</h2>
            <h6 className="margintopbottom20">
              Code Camp is a community event where developers learn from fellow
              developers. We also have developer related topics that include
              software branding, legal issues around software as well as other
              topics developers are interested in hearing about.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
// Export this component to resue the code in other components.
export default index;
