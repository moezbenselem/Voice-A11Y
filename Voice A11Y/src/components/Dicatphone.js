import React, { Component } from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";
import { withRouter, Redirect } from "react-router-dom";
import { prototype } from "events";
import { join } from "path";

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  startListening: PropTypes.func,
  recognition: prototype.string,
  browserSupportsSpeechRecognition: PropTypes.bool
};

let wordlist = [];

const options = {
  autoStart: true
};

const Dictaphone = ({
  transcript,
  resetTranscript,
  startListening,
  recognition,
  browserSupportsSpeechRecognition,
  history
}) => {
  recognition.lang = "en-US";

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  

  function handleCommand(command) {
    console.log(command);

    resetTranscript();
    if(command.toLowerCase()==='top'){

    }else
    if (command.toLowerCase() === "contact") {
      history.push("/contact");
    } else if (command.toLowerCase() === "home") {
      history.push("/home");
    } else if (command.toLowerCase() === "services") {
      history.push("/services");
    } else if (command.toLowerCase() === "service") {
      history.push("/services");
    } else if (
      command.toLowerCase() === "login" ||
      command.toLowerCase() === "logan" ||
      command.toLowerCase() === "looking"
    ) {
      history.push("/login");
    } else if (command.toLowerCase() === "next") {
      document.activeElement.nextSibling.focus();
    } else if (command.toLowerCase() === "name") {
      document.getElementById("nom").focus();
    } else if (command.toLowerCase() === "email") {
      document.getElementById("email").focus();
    } else if (command.toLowerCase() === "password") {
      document.getElementById("password").focus();
    } else if (document.activeElement.id === "nom") {
      console.log(document.activeElement.id);
      document.activeElement.value = command;
    } else if (command.toLowerCase() === "delete") {
      wordlist.pop();
      document.activeElement.value = wordlist.join("");
    } else if (
      document.activeElement.id === "email" ||
      document.activeElement.id === "text" ||
      document.activeElement.id === "sujet"
    ) {
      if (command.toLowerCase() === "at" || command.toLowerCase() === "but") {
        wordlist.push("@");
        document.activeElement.value = wordlist.join("");
      } else if (command.toLowerCase() === "stop") {
        wordlist = [];
        document.activeElement.value = "";
      } else {
        wordlist.push(command);
        document.activeElement.value = wordlist.join("");
      }
    } else if (command.toLowerCase() === "send") {
      console.log(document.activeElement.id);
      document.getElementById("send").click();
    } 
    else if(command.toLowerCase() === "events" || command.toLowerCase() === "event") {
      history.push("/services/events");
    }
    else if (command.toLowerCase() === "class" || command.toLowerCase() === "plus") {
      history.push("/services/class");
    } else {
      return null;
    }
  }

  return (
    <div className="pt-24">
      {/* <button  className='text-white'
      onClick={resetTranscript}>Reset</button>
      <br></br>
      <button  className='text-white'
      onClick={startListening}>Start</button>
      */}

      {transcript !== "" ? handleCommand(transcript) : null}
    </div>
  );
};

Dictaphone.propTypes = propTypes;

export default withRouter(SpeechRecognition(options)(Dictaphone));
