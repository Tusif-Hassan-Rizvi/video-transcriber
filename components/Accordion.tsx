"use client";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

function Accordion() {
  const [isopen, setIsopen] = useState<boolean>(false);

  const toggleAccordion = () => {
    setIsopen(!isopen);
  };

  return (
    <div className="accordion-box">
      <div className="accordion-titile-box" onClick={toggleAccordion}>
        <span className="accordion-tittle">Section 1</span>

        <picture>
          {isopen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </picture>
      </div>

      {isopen && (
        <ul className="accordion-content">
         <li>Video</li>
         <li>PPT</li>
         <li>Reading</li>
         <li>Assignement</li>
        </ul>
      )}
    </div>
  );
}

export default Accordion;
