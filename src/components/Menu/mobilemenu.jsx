

import React from "react";
import "./mobilemenu.css"
import "../../App.css" 
import { RWebShare } from "react-web-share";
import mobileshareicon from "../../assets/images/mobileshareicon.svg";
import shareicon from "../../assets/images/share-icon.svg";

const MobileMenu = ({ handleClickMenu, showMenu }) => {
  return (
      <nav className="mobile__menu">
      <div>
        <img src={mobileshareicon} alt="" onClick={handleClickMenu} />
      </div>

        <div
          className={`mobile__menu__popup ${showMenu ? "show" : ""}`} 
          onClick={handleClickMenu} >
          <RWebShare
            data={{
              text: "Ibukunoluwa Akintobi",
              url: window.location.href,
              title:
                "Link Tree Application By Ibukunoluwa Akintobi - First HNG i9 Frontend Task",
            }}
            onClick={console.log("copied successfully")}
          >
            <div>
              <img src={shareicon} alt="" />
              <strong>Share Profile</strong>
            </div>
          </RWebShare>

          {showMenu && (
            <div className="overlay" onClick={handleClickMenu}></div>
          )}
        </div>
      </nav>
  );
};

export default MobileMenu;



