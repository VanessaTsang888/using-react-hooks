import React, { useEffect, useState } from 'react';
// Import these components to use them in this component.
import { Header } from './Header';
import { Menu } from './Menu';
// Javascript file that contains an array of speaker data we can demo with. Copy that file in. Its just an array declared and exported in
// in JS. Import it as 'SpeakerData'.
import SpeakerData from './SpeakerData';
import SpeakerDetail from './SpeakerDetail';

// Simple functional component without any incoming props.
// Two state varibles with useState: set the 'speakerList' to an empty array, and the isLoading to 'true'.
const Speakers = ({}) => {
  // Filter speakers for speaking Saturday or Sunday.
  // A filter state for each day, that is with useState create a speakingStaturday  and speakingSunday along with their setters.
  const [speakingSaturday, setSpeakingSaturday] = useState(true);
  const [speakingSunday, setSpeakingSunday] = useState(true);

  const [speakerList, setSpeakerList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
// This Hook/function starts by making sure the loading status is set to true. Then creates a 1-second delay, returning a promise.
// When complete, set SpeakerList state to the imported static speakers array whilst also settin isLoading to false.
// If we had any cleanup to do, we'd return a fn that would execute when component dismounts, but in this case we don't so we just
// logout a msg. For second argument, we passin empty array, as only want this Hook to run fn one time.
  useEffect(() => {
    setIsLoading(true);
    new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, 1000);
    }).then(() => {
      setSpeakerList(SpeakerData);
      setIsLoading(false);
    });

    return () => {
      console.log('cleanup');
    };
  }, []); // run this Hook one time only.

// The event handlers call local functions, that toggle the Saturday and Sunday values accordingly. The way we do the actual filtering of speakers to display is
  const handleChangeSaturday = () => {
    setSpeakingSaturday(!speakingSaturday);
  };

  const handleChangeSunday = () => {
    setSpeakingSunday(!speakingSunday);
  };
// we create a new JS constant in our fn above our return section that takes our speakerList and simply filters it by whether the speakers are talking Saturday,
// Sunday or both.
// It also does an alpha sort at the end. 
  const speakerListFiltered = isLoading
    ? []
    : speakerList
        .filter(
          ({ sat, sun }) =>
            (speakingSaturday && sat) || (speakingSunday && sun),
        )
        .sort(function (a, b) {
          if (a.firstName < b.firstName) {
            return -1;
          }
          if (a.firstName > b.firstName) {
            return 1;
          }
          return 0;
        });
// fn that for now just stop default event processing. 
// Get a reference to the ID by referencing the attributes of the button in SpeakerDetail, and call 'setSpeakerList' and map over all our existing
// speakers and just and map over all our existing speakers and toggle the favoriteValue of the one speaker whose icon was pressed.
  const heartFavoriteHandler = (e, favoriteValue) => {
    e.preventDefault();
    const sessionId = parseInt(e.target.attributes['data-sessionid'].value);
    setSpeakerList(
      speakerList.map((item) => {
        if (item.id === sessionId) {
          return { ...item, favorite: favoriteValue };
        }
        return item;
      }),
    );
  };
// Check if 'isLoading' is set, if so, show the Loading msg. If not, render our Speakers Conference Page.
  if (isLoading) return <div>Loading...</div>;
// Render Header, then Menu, then a Bootstrap container class with a list of Bootstrap cards.
// List of JS expression that maps over our speakerList state and for each entry render a new component, SpeakerDetail which takes in
// all the individual speaker properites and passes them as attributes.
  return (
    <div>
      <Header />
      <Menu />
              {/* Control bar container, has two checkboxes, one for speaking Saturday and one for speaking Sunday.
              Both have onChange handlers and both get their current state from our new state values speaking Saturday and speaking Sunday. */}
      <div className="container">
        <div className="btn-toolbar margintopbottom5 chekbox-bigger">
          <div className="hide">
            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  onChange={handleChangeSaturday}
                  checked={speakingSaturday}
                />
                Saturday Speakers
              </label>
            </div>
            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  onChange={handleChangeSunday}
                  checked={speakingSunday}
                />
                Sunday Speakers
              </label>
            </div>
          </div>
        </div>
        {/* Clickable icon to favorite speakers on each speaker detail card -> pass an attribute, onHeartFavoriteHandler, and set to the local fn heartFavoriteHandler. */}
        {/* Change our speaker detail cards and change speakerList to speakerListFiltered.  */}
        <div className="row">
          <div className="card-deck">
            {speakerListFiltered.map(
              ({ id, firstName, lastName, bio, favorite }) => {
                return (
                  <SpeakerDetail
                    key={id}
                    id={id}
                    favorite={favorite}
                    firstName={firstName}
                    lastName={lastName}
                    bio={bio}
                    onHeartFavoriteHandler={heartFavoriteHandler} // in this attribute and set to the local function 'heartFavoriteHandler'.
                  />
                );
              },
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
