import React from 'react'
import "../App.css"
import linksArray from '../links'
import slack from '/slack.svg'
import profileimg from '/profile-img.jpg'
import mobilesharebutton from '/mobilesharebutton.svg'
import desktopsharebutton from '/desktopsharebutton.svg'
import github from '/github.svg'
const Container = () => {
  return (
    <div className='container'>
        
        <section className= "profile__section" >
            <img src={profileimg} alt="profile image " className='profile__img'/>
            <p id = "twitter">ibkisthere</p>
            <p id = "slack"></p>
        </section>
        <img src={mobilesharebutton} alt="" class= "mobile__share__button" />
        <img src={desktopsharebutton} alt="" class= "desktop__share__button" />

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