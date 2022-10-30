import React from 'react'
import { RWebShare } from "react-web-share";
import "./desktopmenu.css"
import desktopshareicon from "../../assets/images/desktopshareicon.svg";

const DesktopMenu = ({ handleClickMenu, showMenu }) => {

  return (
    <>
    <nav className="desktop__menu" onClick={handleClickMenu} >
                <RWebShare
                  data={{
                    text: "Ibukunoluwa Akintobi",
                    url: window.location.href,
                    title:
                      "Link Tree Application By Ibukunoluwa Akintobi - HNGi9 Frontend Task",
                  }}
                  onClick={() => console.log("shared successfully!")}>
                  <small>
                    <img src={desktopshareicon} alt="" />
                  </small>
                </RWebShare> 
      </nav>
      {showMenu && <div className="overlay" onClick={handleClickMenu}></div>}
 </>

  )
}


export default DesktopMenu
