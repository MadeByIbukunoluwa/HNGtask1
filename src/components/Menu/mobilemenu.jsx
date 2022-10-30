import mobileshareicon from "../../assets/images/mobileshareicon.svg";

import React from "react";
import { RWebShare } from "react-web-share";

const MobileMenu = ({ handleClickMenu, showMenu }) => {
  return (
    <>
      <nav>
        <div className="link-tree-mobileMenu">
          <div className="link-tree-mobileMenu-container">
            <ul
              className={`link-tree-mobileMenu-list ${showMenu ? "show" : ""}`}
              onClick={handleClickMenu}
            >
              <li>
                <RWebShare
                  data={{
                    text: "Ibukunoluwa Akintobi",
                    url: window.location.href,
                    title:
                      "Link Tree Application By Ibukunoluwa Akintobi - HNGi9 Frontend Task",
                  }}
                  onClick={() => console.log("shared successfully!")}
                >
                  <small>
                  <img src={mobileshareicon} alt="" />
                    <strong>Share Profile</strong>
                  </small>
                </RWebShare>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {showMenu && <div className="overlay" onClick={handleClickMenu}></div>}
    </>
  );
};

export default MobileMenu;