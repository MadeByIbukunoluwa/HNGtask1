import React from 'react'
import "./Body.css"
import { Link } from "react-router-dom";
import LinkItem from '../../Link/LinkItem';
import linksArray from '../../../data/links';
import LinkInfo from '../../Link/LinkInfo';
import '../../Link/LinkItem.css';


const Body = () => {
  return (
    <section className="links__section">
      {linksArray.map(({ name, link, id, subtext, title }) => {
        return (
          <>
            <LinkItem
              key={`${Math.random() * 10380203040390}`}
              linkName={name}
              link={link}
              linkSubText={subtext}
              linkTitle={title}
              id={id}
              linkInfo={
                <LinkInfo
                  key={Math.random() * 10000}
                  title={title}
                  subText={subtext}
                />
              }
            />
          </>
        );
      })}
      <Link to="contact" id="contact" className="link__item">
        Contact Me
      </Link>
    </section>
  );
}

export default Body