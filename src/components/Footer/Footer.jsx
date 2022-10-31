import React from 'react'
import zurilogo from "../../assets/images/zuriinternship.svg";
import ingressiveforgood from "../../assets/images/I4G.svg"
import "./Footer.css"

const Footer = () => {
  return (
    <>
    <hr className='line__break'/> 
      <footer className="main__footer">
        {/* <img src={zurilogo} alt="" className='zuri__img' /> */}
        <div className="zuri__logo">
          <h2>
            Zuri <span></span> Internship
          </h2>
        </div>
        <p className="hng__text">HNG Internship 9 Frontend Task</p>
        <img src={ingressiveforgood} alt="" className="ingressive__img" />
      </footer>
    </>
  );
}

export default Footer 

