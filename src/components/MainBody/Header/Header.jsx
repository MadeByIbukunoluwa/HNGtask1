import React,{useState} from "react";
import "../../../App.css"
import { RWebShare } from "react-web-share";
import { Tooltip } from "@mui/material";
import {FaTwitter,} from "react-icons/fa"
import {AiOutlineSlack} from "react-icons/ai"
import DesktopMenu from "../../Menu/desktopmenu";
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
        {/* Ellipsis Icon */} 
        <MobileMenu showMenu={showMenu} handleClickMenu={handleClickMenu} />
        <DesktopMenu showMenu={showMenu} handleClickMenu={handleClickMenu} />
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
