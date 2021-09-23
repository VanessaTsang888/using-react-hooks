// We want to use our ImageToggleOnScroll component so that our speaker images are in color when they are in view, so import this component:
import ImageToggleOnScroll from './ImageToggleOnScroll';

// Declare the component with lots of receiving props since we passed those in when we mapped over our speakers list.
// Format output with a Bootstrap card class, then on top use our ImageToggleOnScroll component to display our speaker image.
const SpeakerDetail = ({
  id,
  firstName,
  lastName,
  favorite,
  bio,
  onHeartFavoriteHandler,
}) => {
  return (
    <div className="card col-4 cardmin">
      {/* display our speaker image. */}
      <ImageToggleOnScroll
        className="card-img-top"
        primaryImg={`/static/speakers/bw/Speaker-${id}.jpg`}
        secondaryImg={`/static/speakers/Speaker-${id}.jpg`}
        alt={`${firstName}  ${lastName}`}
      />
      {/* Render our Bootstrap card-body that includes our speaker first name, and their bio.
      Also, a button that shows our speaker-favoring icon, 'heartredbutton' for favoured, 'heartdarkbutton' for not favoured. We also
      have an onClick event that calls the past function that the passed fn that is passed and receiving props along with the requested favorite type -
      acts as a toggle between favored and not favored. */}
      <div className="card-body">
        <h4 className="card-title">
          <button
            data-sessionid={id}
            className={favorite ? 'heartredbutton' : 'heartdarkbutton'}
            onClick={(e) => {
              onHeartFavoriteHandler(e, !favorite);
            }}
          />
          <span>
            {firstName} {lastName}
          </span>
        </h4>
        <span>{bio}</span>
      </div>
    </div>
  );
};
// export this component to use in other compoenent - resuable code.
export default SpeakerDetail;
