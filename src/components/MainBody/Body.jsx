import React from 'react'
import LinkItem from '../Link/LinkItem';
import linksArray from '../../data/links';
import LinkInfo from '../Link/LinkInfo';
const Body = () => {
  return (
    <section className="links__section">
      {linksArray.map(({ name, link, id, subtext, title }) => {
        return (
          <LinkItem
            linkName={name}
            link={link}
            linkSubText={subtext}
            linkTitle={title}
            id={id}
            key = {id}
            linkInfo={<LinkInfo title={{ title }} subText={{ subtext }} />}
          />
        );
      })}
    </section>
  );
}

export default Body