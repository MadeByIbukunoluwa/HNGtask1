import React,{useState} from 'react'
import "../../App.css"
import Header from './Header/Header';
import Body from './Body';
// import PopupComponent from '../popupshare'

import desktopshareicon from '../../assets/images/desktopshareicon.svg';

const Container = () => {
        const [popup, setPopup] = useState(false)
        
    function togglePopup () {
        setPopup(() => setPopup(!popup))
    }

  return (
    <div className="container">
      <Header/>
      {/* {popup && (
        <PopupComponent setPopup={setPopup} setCopyAlert={setCopyAlert} />
      )}

      {copyAlert && (
        <Alert
          alert={copyAlert}
          setCopyAlert={setCopyAlert}
          text="Copied to Clipboard!"
        />
      )} */}
        <Body/>
    </div>
  );
}

export default Container