/*import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Dictionary.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophoneLines } from "@fortawesome/free-solid-svg-icons";

export default function Audio(props) {
  return (
    <div className="Audio">
      <a></a>
      <ReactAudioPlayer src={props.audio} autoPlay controls />
      <FontAwesomeIcon icon={faMicrophoneLines} className="audioIcon" />
    </div>
  );
}*/

/*import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import "./Dictionary.css";

export default function Audio(props) {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="Audio">
      <div onClick={togglePlay} className="audioIcon">
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </div>
      <ReactAudioPlayer
        src={props.audio}
        autoPlay={true}
        controls={false}
        playing={isPlaying}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </div>
  );
}*/

import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay} from "@fortawesome/free-solid-svg-icons";
import "./Dictionary.css";

export default function Audio(props) {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    console.log("Toggle play clicked");
    setIsPlaying(!isPlaying);
  };

  const handleAudioEnded = () => {
    setIsPlaying(false); // Reset the playback state after audio ends
  };

  return (
    <span className="Audio">
      <span onClick={togglePlay} className="audioIcon">
        <FontAwesomeIcon icon={faPlay} />
      </span>
      <ReactAudioPlayer
        src={props.audio}
        autoPlay={true}
        controls={false}
        playing={isPlaying}
        onPlay={() => setIsPlaying(true)}
        /*onPause={() => setIsPlaying(false)}*/
        onEnded={handleAudioEnded}
      />
    </span>
  );
}
