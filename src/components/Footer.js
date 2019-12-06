import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="bg-gray-800 h-40 mt-10 flex justify-between py-8 px-12">
        <div className="flex">
          <img src="./icons/call.png" alt="call" className="w-20 h-20"></img>
          <div className="ml-4 text-gray-500">
            <p className="font-bold">Call</p>
            <p>T : +21673296060</p>
            <p>T : +21673296060</p>
          </div>
        </div>
        <div className="flex">
          <img src="./icons/mail.png" alt="call" className="w-20 h-20"></img>
          <div className="ml-4 text-gray-500">
            <p className="font-bold">Contact</p>
            <p>contact@episousse.com</p>
          </div>
        </div>
        <div className="flex">
          <img src="./icons/social.png" alt="call" className="w-20 h-20"></img>
          <div className="ml-4 text-gray-500">
            <p className="font-bold">Follow Us</p>
            <div className="mt-2">
              <a href="https://www.facebook.com/pages/category/College---University/EPI-Sousse-Ecole-Pluridisciplinaire-Internationale-1609857752597726/" target="_black">
                <img
                  src="./icons/facebook.png"
                  alt="facebbok"
                  className="w-8 h-8 inline-block mr-3"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/epi-sousse-174368150/"
                target="_black"
              >
                <img
                  src="./icons/linkedin.png"
                  alt="linkedin"
                  className="w-8 h-8 inline-block mr-3"
                />
              </a>
              <a href="#" >
                <img
                  src="./icons/github-logo.png"
                  alt="github"
                  className="w-8 h-8 inline-block"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex">
          <img
            src="./icons/copyright.png"
            alt="call"
            className="w-20 h-20"
          ></img>
          <div className="ml-4 text-gray-500">
            <p>© 2019 by DevCrows</p>
            <p>Created with React</p>
          </div>
        </div>
      </div>
    );
  }
}
