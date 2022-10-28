import React,{useState} from 'react'
import "../App.css"
import linksArray from '../links'
import slack from '/slack.svg'
import profileimg from '/profile-img.jpg'
import mobilesharebutton from '/mobilesharebutton.svg'
import desktopsharebutton from '/desktopsharebutton.svg'
import popupshareicon from "/popupshare.svg"
import github from '/github.svg'

const Container = () => {
    const PopupComponent = () => {
        function copyLink () {
            navigator.clipboard.writeText(window.location.origin)
            console.log(navigator.clipboard.writeText(window.location.origin))
        }
        return (
            <div className='popup__share' onClick={copyLink}>
                <img src={popupshareicon} alt="share profile link icon" />
                <p>Share Profile</p>
            </div>
        )
    }
    const [popup, setPopup] = useState(false)
    const [copyToClipboard,setCopytoClipboard] = useState(false)
    function togglePopup () {
        setPopup(() => setPopup(!popup))
        console.log("hello")
    }
  return (
    <div className='container'>
        <section className= "profile__section" >
            <img src={profileimg} alt="profile image " className='profile__img'/>
            <p id = "twitter">@ibkisthere</p>
            <p id = "slack">ibukunoluwa</p>
        </section>
        <img src={mobilesharebutton} alt="" className= "mobile__share__button" onClick = {togglePopup} />
        {popup && <PopupComponent/>} 
        <img src={desktopsharebutton} alt="" className= "desktop__share__button" />

         <section className="links__section">
            {linksArray.map(({name,link,id})=> {
                return (
                    <a className='links' href= {link} id = {id} key = {id}>
                        {name} 
                      </a>
                )
            })}
         </section>
         <footer className='footer__section'>
            <img src={slack} alt="slack logo"/>
            <img src={github} alt="github logo" />
         </footer>
    </div>
  )
}



export default Container