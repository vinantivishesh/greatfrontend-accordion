import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';

export default function Accordion({ sections }) {
  const [openSections, setOpenSections] = useState(new Set());

  const handleSectionClick = (title) => {
    let newOpenSections = new Set(openSections);
    if (openSections.has(title)) {
      newOpenSections.delete(title);
    } else {
      newOpenSections.add(title);
    }
    setOpenSections(newOpenSections);
  };

  const accordions = sections.map((section) => {
    const isExpanded = openSections.has(section.title);
    return (
      <div className={'accordion-item'}>
        <button onClick={() => handleSectionClick(section.title)}>
          {section.title}
          <span>{isExpanded ? <FaAngleDown /> : <FaAngleUp />}</span>
        </button>
        <div className={'accordion-contents'} hidden={isExpanded}>
          {section.contents}
        </div>
      </div>
    );
  });

  return <div>{accordions}</div>;
}
