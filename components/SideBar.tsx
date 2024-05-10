"use client";
import React, { useEffect, useState } from "react";
import Accordion from "./Accordion";
import { IoIosArrowForward } from "react-icons/io";

function SideBar() {
  const [sideBar, setSideBar] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setSideBar(window.innerWidth >= 600);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="responsive-nab">
        <IoIosArrowForward
          className="drawer-icon"
          onClick={() => setSideBar(!sideBar)}
        />
      </div>

      <aside
        className="sidebar-section"
        style={sideBar ? { display: "block" } : { display: "none" }}
      >
        <div className="sidebar-wrapper">
          <Accordion
            accordionTitle={"Section 1"}
            accordionlink={[
              { linktext: "Video", linkhref: "/video" },
              { linktext: "PPT", linkhref: "/" },
              { linktext: "Reading", linkhref: "/" },
              { linktext: "Assignement", linkhref: "/" },
            ]}
          />
          <Accordion
            accordionTitle={"Section 2"}
            accordionlink={[
              { linktext: "FAQ", linkhref: "/" }
            ]}
          />
          
        </div>
      </aside>
    </>
  );
}

export default SideBar;
