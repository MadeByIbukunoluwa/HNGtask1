import React,{useState} from 'react'
import "./Container.css"
import Header from '../Header/Header';
import Socials from '../Socials/Socials';
import Body from '../Body/Body';


const Container = () => {

  return (
    <div className="container">
      <Header/>
        <Body/>
    <Socials/>
    </div>
  );
}

export default Container