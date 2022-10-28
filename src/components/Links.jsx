

import React,{useEffect,useState,useRef} from 'react'
import ReactTooltip from "react-tooltip";
import linksArray from "../links";



const Links = () => {
return (
    <section className="links__section">
      {linksArray.map(({ name, link, id, subtext, maintext }) => {
          return (
            <>
              <a
                className="links"
                href={link}
                id={id}
                key={id}
                data-for={id}
                data-tip={subtext}
                data-event = "click"
              >
                {name}
              </a>
              <ReactTooltip place="top" id={id} event="click" />
            </>
          );
    })}
    </section>
  );
}


export default Links

// useEffect(
//     () => {

// }, [showToolTip]);


{/* <ActivateToolTip ID = {id}/> */}


//  const container = useRef(null);
//  const [position, setPosition] = useState({});

//  function setTooltipActive(e, { ID }) {
//    console.log(e.target);
//    const containerPosition = e.target.getBoundingClientRect();
//    setPosition(containerPosition);
//    if (e.target === document.getElementsByClassName("ID")) return <Tooltip />;
//    //   setShowToolTip(true);
//    //   console.log("hekellele");
//  }

//  function ActivateToolTip() {
//    // if (ID === e.target.classlist)
//  }

//  function setTooltipInActive() {
//    setShowToolTip(false);
//  }

 // const [showToolTip, setShowToolTip] = useState(false);
   




//     const Tooltip = () => {
        
// };