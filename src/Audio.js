import React, { useRef } from "react";
import ReactAudioPlayer from "react-audio-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophoneLines } from "@fortawesome/free-solid-svg-icons";
import "./Dictionary.css";

export default function Audio(props) {
  const audioRef = useRef(null);

  const audioUrl = props.audio && props.audio.audio ? props.audio.audio : ""; // Get the audio URL or set to empty string if not available

  return (
    <span className="Audio">
      {audioUrl === "" ? (
        <small className="fs-6 text-secondary">Audio Unavailable</small>
      ) : (
        <React.Fragment>
          <span
            onClick={() => audioRef.current.audioEl.current.play()}
            className="audioIcon"
          >
            <FontAwesomeIcon icon={faMicrophoneLines} />
          </span>
          <ReactAudioPlayer
            ref={audioRef}
            src={audioUrl}
            autoPlay={true}
            controls={false}
          />
        </React.Fragment>
      )}
    </span>
  );
}
