

import React,{useEffect,useState,useRef} from 'react'
import linksArray from "../links";
import Tooltip from './tooltip';



const Links = () => {
    const [showToolTip, setShowToolTip] = useState(false);
    const container = useRef(null); 
    const [position, setPosition] = useState({});

    function setTooltipActive(e) {
        console.log(e.target)
      const containerPosition = e.target.getBoundingClientRect();
      setPosition(containerPosition);
      setShowToolTip(true);
      console.log("hekellele")
    }


    function setTooltipInActive () {
        setShowToolTip(false);
    }

//     const Tooltip = () => {
        
// };


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
                onMouseOver={setTooltipActive}
                onMouseLeave={setTooltipInActive}
                ref={container}
              >
                {name}

                {showToolTip && (
                  <Tooltip
                    maintext={maintext}
                    subtext={subtext}
                    position={position}
                  />
                )}
              </a>
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