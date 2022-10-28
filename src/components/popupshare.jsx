import React from "react"
import popupshareicon from "/popupshare.svg"
    const PopupComponent = ({setPopup,setCopyAlert}) => {
        function copyLink () {
            navigator.clipboard.writeText(window.location.origin)
            .then(()=> {
                console.log("set")
            }).catch(err => console.log(err))
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