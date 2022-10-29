import React from "react";
import { RWebShare } from "react-web-share";
import { Tooltip } from "@mui/material";
import 
import camera from "../../assets/images/camera.svg";

import MobileMenu from "../MobileMenu";

const CardHeader = () => {
  const [showImage, setShowImage] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const handleClickImage = (e) => {
    setShowImage(!showImage);
    console.log(showImage);
  };
  const handleClickMenu = (e) => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };

  return (
    <>
      <div className="link-tree-cardHeader">
        <div className="link-tree-cardHeader-content">
          <div className="link-tree-cardHeader-profileInfo">
            <div className="link-tree-cardHeader-options">
              {/* Share Icon */}




              <Tooltip title="Share" placement="left" arrow>
                <RWebShare
                  data={{
                    text: "Browyn Louis",
                    url: window.location.href,
                    title:
                      "Link Tree Application By Ibukunoluwa Akintobi - First HNG i9 Frontend Task",
                  }}
                  onClick={() => console.log("shared successfully!")}
                >
                  <div className="share-icon">
                   <img src={shareicon} alt="" />
                  </div>
                </RWebShare>
              </Tooltip>





              {/* Ellipsis Icon */}

              <div className="menu-icon" onClick={handleClickMenu}>
                  <img src={mobileshareicon} alt="" />
                </svg>
              </div>
              <MobileMenu
                showMenu={showMenu}
                handleClickMenu={handleClickMenu}
              />
            </div>
            <div className="link-tree-cardHeader-profileImage">
              <img
                src="https://replit.com/@MadeByIbukunoluwa/HNG-image#images/profile-img.jpg"
                alt=""
                tabIndex="0"
                id="profile__img"
                onClick={handleClickImage}
              />

              <div
                className={`profileImageOverlay ${showImage ? "show" : ""}`}
                onClick={handleClickImage}
              >
                <img src={camera} alt="" tabIndex="0" />
              </div>
            </div>
            <h1>Ibukunoluwa Akintobi</h1>
            <div className="link-tree-twitter-link-con">
              <span className="fa-brands fa-twitter"></span>
              <strong>
                <a
                  href="https://twitter.com/ibkisthere"
                  target="_blank"
                  rel="noreferrer nooppener"
                  id="twitter"
                >
                  @browyn_louis
                </a>
              </strong>
            </div>



            <div className="link-tree-slack-link-con">
              <span className="fa-brands fa-slack"></span>
              <strong>
                <a href="https://slack.com/" target="_blank" rel="noreferrer nooppener" id="slack"
                >
                 Ibukunolwua Akintobi
                </a>
              </strong>
            </div>




          </div>
        </div>
      </div>
    </>
  );
};

export default CardHeader;
