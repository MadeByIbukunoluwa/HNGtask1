import React from 'react'
import "../App.css"
import linksArray from '../links'
const Container = () => {
  return (
    <div className='container'>
        <section className= "profile__section">
            <img src="" alt="profile image" className='profile__img'/>
            <p id = "twitter">ibkisthere</p>
            <p id = "slack"></p>
        </section>

         <section className="links__section">
            {linksArray.map(({name,link,id})=> {
                return (
                    <a className='links' href= {link} id = {id}>
                        {name} 
                      </a>
                )
            })}
         </section>
         <footer className='footer__section'>
            
         </footer>
    </div>
  )
}



export default Container