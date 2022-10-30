import React from "react";
import camera from "../../../assets/images/camera.svg";



const Image = ({handleClickImage,showImage}) => {
  return (
    <div className="link-tree-header-profileImage">
      <img
        src="https://unsplash.com/photos/fug7hitpSDE/"
        alt=""
        tabIndex="0"
        id="profile__img"
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