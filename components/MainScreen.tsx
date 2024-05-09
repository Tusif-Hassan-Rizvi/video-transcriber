import React from "react";
import TranscriptJson from "../subtitle.json";
import VideoPlayer from "./VideoPlayer";

function MainScreen() {
  return (
    <section className="main-screen">
      <div className="container-common">
        <div className="main-screen-wrapper">
          <VideoPlayer
            videoSrc="/videos/shashi-tharoor.mp4"
            plainText={TranscriptJson}
          />
        </div>
      </div>
    </section>
  );
}

export default MainScreen;
