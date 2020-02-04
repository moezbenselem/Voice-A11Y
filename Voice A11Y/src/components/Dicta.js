import React, { Component } from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";
import { withRouter, Redirect } from "react-router-dom";
import { prototype } from "events";

const propTypes = {
    // Props injected by SpeechRecognition
    transcript: PropTypes.string,
    resetTranscript: PropTypes.func,
    startListening : PropTypes.func,
    recognition : prototype.string,
    browserSupportsSpeechRecognition: PropTypes.bool
  };

  const options = {
    autoStart: false
  }

class Dicta extends Component {
    
    
  render() {
    
    console.log(this.props.history)
    
    return (
      <div className="pt-24">
        <button className="text-white" onClick={null}>
          Reset
        </button>
        <br></br>
        <button className="text-white" onClick={null}>
          Start
        </button>
        <span>{null}</span>
        {/* {handleCommand(transcript)} */}
        {null}
      </div>
    );
  }
}

Dicta.propTypes = propTypes;

export default withRouter(SpeechRecognition(options)(Dicta));