import React,{useState} from "react";
import "./Header.css"
import {FaTwitter,} from "react-icons/fa"
import {AiOutlineSlack} from "react-icons/ai"
import DesktopMenu from "../../Menu/desktopmenu";
import MobileMenu from "../../Menu/mobilemenu";
import Image from "./Image";

// import MobileMenu from "../MobileMenu";

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
    <header className="main__header">

      <div className="share">
        <MobileMenu showMenu={showMenu} handleClickMenu={handleClickMenu}/>
        <DesktopMenu showMenu={showMenu} handleClickMenu={handleClickMenu}/> 
      </div>

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
            @ibkisthere
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



    </header>
  );
};

export default Header;
