import React,{useState} from 'react'
import "../../App.css"
import Header from './Header/Header';
import Socials from './socials';
import Body from './Body';


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