// import { Rating } from "@material-ui/lab";
import React from "react";
import ReactStars from "react-rating-stars-component";
import profileImg from "../Product/image/profile img.png";

const ReviewCard = ({ review }) => {
  const options = {
    value: review.rating,
    readOnly: true,
    precision: 0.5,
    size: window.innerWidth < 600 ? 18 : 25,
  };

  return (
    <div className="reviewCard">
      <img src={profileImg} alt="User" />
      <p>{review.name}</p>
      <ReactStars {...options} />
      <span className="reviewCardComment">{review.comment}</span>
    </div>
  );
};

export default ReviewCard;