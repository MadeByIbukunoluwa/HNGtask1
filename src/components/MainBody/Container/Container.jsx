import React,{useState} from 'react'
import "./Container.css"
import Header from '../Header/Header';
import Socials from '../Socials/Socials';
import Body from '../Body/Body';
import Footer from '../../Footer/Footer';

const Container = () => {

  return (
    <div className="container">
      <Header/>
        <Body/>
    <Socials/>
    <Footer/>
    </div>
  );
}

export default Container