

import React from 'react'
import { Tooltip } from "@mui/material";
import { RWebShare } from "react-web-share";
import shareicon from "../../assets/images/share-icon.svg"
import LinkInfo from './LinkInfo';
const LinkItem = ({
    id,
    link,
    linkText,
    linkInfo,
    linkTitle,
    linkSubText
}) => {
   
return (
        <div>
            <Tooltip
                title={linkDetails}
                arrow>
                <a href={link} id={id} className="" target="_blank" rel="noreferrer nooppener" onClick={(e) => {
                    e.preventDefault();
                    if (e.target === e.currentTarget) {
                        window.location.href = link;
                    }
                }}>
                    <span></span>
                    {linkText}

                    <RWebShare
                        data={{
                            text: linkTitle,
                            url: link,
                            title: linkSubText,
                        }}

                    >
                        <span onClick={(e) => {
                            e.preventDefault();
                              }}>

                            <div className="share-icon">
                              <img src={} alt="" />
                            </div>
                        </span>

                    </RWebShare>
                </div>
            </Tooltip>
        </>
    );
};


export default LinkItem;

















































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

//  <a
//                 className="links"
//                 href={link}
//                 id={id}
//                 key={id}
//                 data-for={id}
//                 data-tip={subtext}
//                 data-event="focus" 
//                 data-padding="8px 21px"
//                 multiline="true"
//               >
//                 {name}
//               </a>
//               <ReactTooltip
//                 place="top"
//                 id={id}
//                 aria-haspopup="true"
//                 role="example"
//               />
//             </>

//  //  const [referenceElement, setReferenceElement] = useState(null);
//     const referenceElement = useRef()
//     const popperElement = useRef()
//     //  const [popperElement, setPopperElement] = useState(null);
//     //  const [arrowElement, setArrowElement] = useState(null);
//     const arrowElement = useRef()
//      const { styles, attributes } = usePopper(referenceElement.current, popperElement.current, {
//        modifiers: [{ name: "arrow", options: { element: arrowElement.current } }],
//      });

//               <div
//                 ref={popperElement}
//                 style={styles.popper}
//                 {...attributes.popper}
//               >
//                {subtext}
//                 <div ref={arrowElement} style={styles.arrow} />
//               </div>
//             </>