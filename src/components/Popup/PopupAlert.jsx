import React,{useState} from "react"
import {TiTickOutline} from "react-icons/ti"
    const PopupComponent = ({setCopyAlert,copyAlert}) => {
        function copyLink () {
           
            {copyAlert && <Alert alert = {copyAlert} setCopyAlert = {setCopyAlert} text = {}/>}
        } 
       return (
            <div className='popup__share'>
                <p>Copied to ClipBoard</p>
                <TiTickOutline/>
            </div>
        )
    }
export default PopupComponent

