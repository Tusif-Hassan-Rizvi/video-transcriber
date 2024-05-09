import React from "react";

function MainScreen() {
  return (
    <section className="main-screen">
      <div className="container-common">
        <div className="main-screen-wrapper">
          <video controls width={400} height={200}>
            <source src="/videos/shashi-tharoor.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}

export default MainScreen;
