import React from 'react'
import "../App.css"
import linksObject from '../links'
const Container = props => {
  return (
    <div>
        <section className= "profile__section">
            <img src="" alt="profile image" className='profile__img'/>
            <p>Ibukunoluwa Akintobi</p>
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
    </div>
  )
}



export default Container