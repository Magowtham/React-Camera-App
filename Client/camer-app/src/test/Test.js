import React, { useRef, useEffect, useState } from "react";
import "../CSS/Test.css";

function Test() {
  const [videoState, setVideoState] = useState(false);
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
      })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const videoPlay = () => {
    if (videoState) {
      videoRef.current.play();
      setVideoState(false);
    } else {
      videoRef.current.pause();
      setVideoState(true);
    }
  };
  useEffect(() => {
    getVideo();
  }, []);
  return (
    <div className="camera-container">
      <div className="video-sec">
        <video ref={videoRef}></video>
      </div>
      <div className="control-sec">
        <button onClick={videoPlay}>{videoState ? "pause" : "play"}</button>
      </div>
    </div>
  );
}

export default Test;
