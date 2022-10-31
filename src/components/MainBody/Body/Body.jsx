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
              linkName={name}
              link={link}
              linkSubText={subtext}
              linkTitle={title}
              id={id}
              key={`link__section__${id}`}
              linkInfo={<LinkInfo title={ title } subText={ subtext} />}
            />
          </>
        );
      })}
    </section>
  );
}

export default Body