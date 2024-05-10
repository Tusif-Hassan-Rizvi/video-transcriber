"use client";
import React, { useEffect, useRef, useState } from "react";

export interface Subtitle {
  startTime: number;
  text: string;
}

interface VideoPlayerProps {
  videoSrc: string;
  plainText: Subtitle[];
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc, plainText }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const textBoxRef = useRef<HTMLDivElement>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const subtitles: Subtitle[] = plainText;

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
    if (textBoxRef.current) {
      textBoxRef.current.scrollTop = textBoxRef.current.scrollHeight;
    }
  };


  return (
    <>
      <video
        ref={videoRef}
        src={videoSrc}
        controls
        onTimeUpdate={handleTimeUpdate}
        className="video"
      />
      <div className="transcript-box">
        <h2 className="transcript-heading">Transcript</h2>
        <div className="transcript-text" ref={textBoxRef}>
          {subtitles
            .filter((subtitle) => subtitle.startTime <= currentTime)
            .map((subtitle, index) => (
              <p key={index}>{subtitle.text}</p>
            ))}
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
