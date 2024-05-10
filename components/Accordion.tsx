"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

interface AccordionContent {
  accordionTitle: string;
  accordionlink: { linktext: string; linkhref: string }[];
}

const Accordion: React.FC<AccordionContent> = ({
  accordionTitle,
  accordionlink,
}) => {
  const [isopen, setIsopen] = useState<boolean>(false);

  const toggleAccordion = () => {
    setIsopen(!isopen);
  };

  return (
    <div className="accordion-box">
      <div className="accordion-titile-box" onClick={toggleAccordion}>
        <span className="accordion-tittle">{accordionTitle}</span>

        <picture>
          {isopen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </picture>
      </div>

      {isopen && (
        <ul className="accordion-content">
          {accordionlink.map((val, index) => (
            <Link href={val.linkhref} key={index}>
              <li>{val.linktext}</li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Accordion;
