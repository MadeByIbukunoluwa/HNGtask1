import React from "react";
import "../../App.css"
import { RWebShare } from "react-web-share";
import { Tooltip } from "@mui/material";
import {FaTwitter,} from "react-icons/fa"
import {AiOutlineSlack} from "react-icons/ai"
import camera from "../../assets/images/camera.svg";

import MobileMenu from "../MobileMenu";

const Header = () => {
  const [showImage, setShowImage] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleClickImage = () => {
    setShowImage(() => !showImage);
    console.log(showImage);
  };
  const handleClickMenu = () => {
    setShowMenu(() => !showMenu);
    console.log(showMenu);
  };

  return (
    <>
      <div className="link-tree-header">
       
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
              </div>
              <MobileMenu
                showMenu={showMenu}
                handleClickMenu={handleClickMenu}
              />
            </div>


            <div className="link-tree-header-profileImage">
              <img
                src="https://replit.com/@MadeByIbukunoluwa/HNG-image#images/profile-img.jpg"
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


            <h1>Ibukunoluwa Akintobi</h1>
            <div className="link-tree-twitter-link-con">
              <FaTwitter/>
              <strong>
                <a
                  href="https://twitter.com/ibkisthere"
                  target="_blank"
                  rel="noreferrer nooppener"
                  id="twitter" >  Ibukunoluwa Akintobi  </a>
              </strong>
            </div>



            <div className="link-tree-slack-link-con">
              <AiOutlineSlack/>
              <strong>
                <a href="https://slack.com/" target="_blank" rel="noreferrer nooppener" id="slack" >
                 Ibukunolwua Akintobi
                </a>
              </strong>
            </div>




    </>
  );
};

export default Header;
