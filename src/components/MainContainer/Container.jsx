import React,{useState} from 'react'
import "../App.css"
import Link from '../Link/LinkItem'
import Alert from '../Alert'
import PopupComponent from '../popupshare'
import linksArray from '../../data/links'
import mobilesharebutton from '/mobilesharebutton.svg'
import desktopsharebutton from '/desktopsharebutton.svg'

const Container = () => {
        const [popup, setPopup] = useState(false)
        const [copyAlert,setCopyAlert] = useState(false)
     
    function togglePopup () {
        setPopup(() => setPopup(!popup))
    }

  return (
    <div className="container">


      <section className="profile__section">
        <img src="" alt="profile image" className="profile__img" />
        <p id="twitter">@ibkisthere</p>
        <p id="slack">ibukunoluwa</p>
      </section>

      <img
        src={mobilesharebutton}
        alt=""
        className="mobile__share__button"
        onClick={togglePopup}
      />

    <img src={desktopsharebutton} alt="" className="desktop__share__button" />

      {popup && (
        <PopupComponent setPopup={setPopup} setCopyAlert={setCopyAlert} />
      )}

      {copyAlert && (
        <Alert
          alert={copyAlert}
          setCopyAlert={setCopyAlert}
          text="Copied to Clipboard!"
        />
      )}
      

      <section className="links__section">
        {linksArray.map(({ name, link, id, subtext, title }) => {
          return (
           <Link 
            linkName = {name} 
            link = {link}
            linkSubText = {subtext}
            linkTitle = {title} 
            id = {id} 
            linkInfo = {<LinkInfo title={{title}} subText={{subtext}}/>}
           />
          );
        })}
      </section>

      

    </div>
  );
}

export default Container