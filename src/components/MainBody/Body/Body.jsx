import React from 'react'
import "./Body.css"
import LinkItem from '../../Link/LinkItem';
import linksArray from '../../../data/links';
import LinkInfo from '../../Link/LinkInfo';



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
              linkInfo={<LinkInfo key={Math.random() * 10000} title={title} subText={subtext} />}
            />
          </>
        );
      })}
    </section>
  );
}

export default Body