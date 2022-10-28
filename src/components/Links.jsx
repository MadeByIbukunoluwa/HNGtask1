

import React,{useEffect,useState,useRef} from 'react'
import linksArray from "../links";
import Tooltip from './tooltip';



const Links = () => {
    const [showToolTip, setShowToolTip] = useState(false);
    const container = useRef(null); 

    function setTooltipActive(e) {
      const containerPosition = e.target.current.getBoundingClientRect();
      const [position, setPosition] = useState({});
      const center = (position.left + position.right) / 2;
      const bottom = position.bottom - 3;
      setPosition(containerPosition);
      setShowToolTip(true);
      console.log("hekellele")
      return (
      
      );
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
            </a>
            {showToolTip && (
                <Tooltip
                maintext={maintext}
                subtext={subtext}
                // position={containerPosition}
                />
                )}
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