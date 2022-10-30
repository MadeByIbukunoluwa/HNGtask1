import React,{useState} from "react"
import popupshareicon from "/popupshare.svg"
    const PopupComponent = ({setCopyAlert,copyAlert}) => {
        function copyLink () {
           
            {copyAlert && <Alert alert = {copyAlert} setCopyAlert = {setCopyAlert} text = {}/>}
            setPopup(false) 
            setCopyAlert(true) 
        } 
       return (
            <div className='popup__share' onClick={copyLink}>
                <img src={popupshareicon} alt="share profile link icon" />
                <p>Share Profile</p>
            </div>
        )
    }
export default PopupComponent

