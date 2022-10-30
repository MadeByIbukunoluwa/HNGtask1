import React from "react";
import camera from "../../../assets/images/camera.svg";
import profileimg from "../../../assets/images/profile-img.jpg"
import "../../../App.css"
import "./Image.css" 



const Image = ({handleClickImage,showImage}) => {
  return (
    <div className="profile__img">
      
      <img
        src={profileimg}
        alt=""
        tabIndex="0"
        id=""
        onClick={handleClickImage}
      />

      <div
        className={`profile__image__overlay ${showImage ? "show" : ""}`}
        onClick={handleClickImage}
      >
        <img src={camera} alt="" tabIndex="0" />
      </div>

    </div>
  );
}


export default Image