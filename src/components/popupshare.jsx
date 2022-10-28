import React,{useState} from "react"
import popupshareicon from "/popupshare.svg"
    const PopupComponent = ({setPopup,setCopyAlert,copyAlert}) => {
        const [error, setError] = useState("")
        function copyLink () {
            navigator.clipboard.writeText(window.location.origin)
            .then(()=> {
                console.log("set")
            }).catch(err => {
                setError(err)
            })
            {copyAlert && <Alert alert = {copyAlert} setCopyAlert = {setCopyAlert} text = {error}/>}
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

