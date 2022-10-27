import React from 'react'
import classes from "../App.modules.css"
import linksObject from '../links'
const Container = props => {
  return (
    <div>
        <section className={classes.profile}>
            <img src="" alt="profile image"/>
            <p>Ibukunoluwa Akintobi</p>
        </section>
         <section className={classes.links}>
            {linksObject.map(()=> {
                return (
                    <div>
                        
                    </div>
                )
            })}
         </section>
    </div>
  )
}



export default Container