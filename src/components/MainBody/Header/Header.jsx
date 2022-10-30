import React,{useState} from "react";
import "../../../App.css"
import { RWebShare } from "react-web-share";
import { Tooltip } from "@mui/material";
import {FaTwitter,} from "react-icons/fa"
import {AiOutlineSlack} from "react-icons/ai"
import MobileMenu from "../../Menu/mobilemenu";
import Image from "./Image";
import desktopshareicon from "../../../assets/images/desktopshareicon.svg";
import mobileshareicon from '../../../assets/images/mobileshareicon.svg'


// import MobileMenu from "../MobileMenu";

const Header = () => {
  const [showImage, setShowImage] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showPopup,setShowPopup] = useState(false)
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
        {/* <section className="profile__section">
          <img src="" alt="profile image" className="" />
          <p id="twitter">@ibkisthere</p>
          <p id="slack">ibukunoluwa</p>
        </section> */}

        {/* Share Icon */}

        <Tooltip title="Share" placement="left" arrow>
          <RWebShare
            data={{
              text: "Ibukunoluwa Akintobi",
              url: window.location.href,
              title:
                "Link Tree Application By Ibukunoluwa Akintobi - First HNG i9 Frontend Task",
            }}
            onClick={() => setShowPopup(true)}
          >
            <div className="share-icon">
              <img src={desktopshareicon} alt="" />
            </div>
          </RWebShare>
        </Tooltip>

        {/* Ellipsis Icon */}

        <div className="menu-icon" onClick={handleClickMenu}>
          <img src={mobileshareicon} alt="" />
        </div>
        <MobileMenu showMenu={showMenu} handleClickMenu={handleClickMenu} />
      </div>

      <h1>Ibukunoluwa Akintobi</h1>
      <Image handleClickImage = {handleClickImage} showImage = {showImage} />

      <div className="header__twitter__link">
        <FaTwitter />
        <strong>
          <a
            href="https://twitter.com/ibkisthere"
            target="_blank"
            rel="noreferrer nooppener"
            id="twitter"
          >
            Ibukunoluwa Akintobi
          </a>
        </strong>
      </div>

      <div className="header__slack__link">
        <AiOutlineSlack />
        <strong>
          <a
            href="https://slack.com/"
            target="_blank"
            rel="noreferrer nooppener"
            id="slack"
          >
            Ibukunoluwa Akintobi
          </a>
        </strong>
      </div>
    </>
  );
};

export default Header;
