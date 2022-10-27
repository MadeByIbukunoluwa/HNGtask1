import React from 'react'
import "../App.css"
import linksArray from '../links'
import slack from '/slack.svg'
import github from '/github.svg'
import profileimg from '/profile-img.jpg'
const Container = () => {
  return (
    <div className='container'>
        <section className= "profile__section" >
            <img src={profileimg} alt="profile image " className='profile__img'/>
            <p id = "twitter">ibkisthere</p>
            <p id = "slack"></p>
        </section>
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