import React from 'react'
import slack from "../../../assets/images/slack.svg"
import github from "../../../assets/images/github.svg"
import "./Socials.css"
const Socials = (props) => {
  return (
    <footer className="main__container__social">
      <a
        href="https://hng9.slack.com/"
        target="_blank"
        rel="noreferrer nooppener"
      >
        <img src={slack} alt="slack logo" />
      </a>

      <a
        href="https://github.com/MadeByIbukunoluwa"
        target="_blank"
        rel="noreferrer nooppener"
      >
        <img src={github} alt="github logo" />
      </a>
    </footer>
  );
}


export default Socials