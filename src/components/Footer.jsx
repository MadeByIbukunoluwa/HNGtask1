import React from 'react'
import zurilogo from "/zuriinternship.svg"
import ingressiveforgood from "/I4G.svg"

const Footer = () => {
  return (
    <footer className='main__footer'>
        <img src={zurilogo} alt="" className='zuri__img' />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={ingressiveforgood} alt="" className='ingressive__img' />
    </footer>
  )
}



export default Footer