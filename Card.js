import { useState } from "react";
import "./Card.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

// Card function starts here

function Card({ event_name, date, location, time, image_url, is_liked }) {
  const [like, setLike] = useState(is_liked);
  function handleClick(e) {
    e.stopPropagation();
    setLike(!like);
  }

  return (
    <>
      <div className="card">
        <div className="card-left">
          <img src={`${image_url}`} alt="event_image" />
        </div>
        <div className="data">
          <h2>{event_name}</h2>
          <div className="sub-data">
            {date} {time}{" "}
          </div>
          <div className="location">{location} </div>
          <div className="heart" onClick={handleClick}>
            {like ? <AiFillHeart /> : <AiOutlineHeart />}
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
