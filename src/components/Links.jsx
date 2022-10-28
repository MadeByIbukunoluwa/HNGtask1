

import React,{useEffect,useState} from 'react'
import linksArray from "../links";



const Links = () => {
    const [showToolTip, setShowToolTip] = useState(false);
    const container = useRef(null); 
    function toggleTooltip() {
        setShowToolTip(() => !showToolTip);
    }

const Tooltip = ({ subtext, maintext}) => {
    const [position,setPosition] = useState({}) 
    useEffect(() => {
      const containerPosition = container.current.getBoundingClientRect();
      setPosition();
    }, [showToolTip]);
  const center = (position.left + position.right) / 2;
  const bottom = position.bottom - 3;
  return (
    <div className="tooltip" style={{ top: `${center}`, bottom: `${bottom}` }}>
      <h4>{maintext}</h4>
      <p>{subtext}</p>
    </div>
  );
};

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
              onMouseOver={toggleTooltip}
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