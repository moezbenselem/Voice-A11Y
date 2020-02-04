import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div className="flex text-gray-400 p-32 pt-32 bg-gray-900 h-100 pb-56">
        <div className="w-1/2">
          <div className="float-right">
            <h2>LOGIN</h2>
            
          </div>
        </div>
        <div className="mt-8 ml-20 w-1/5">
        <form className="">
            <input
              id='email'
              type="email"
              required
              placeholder="Email *"
              className="placeholder-red-800"
            />
            <input id='password' type="password" placeholder="Password" className="mt-8 ml-20 w-1/5" />
            <button id='send' className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded float-right mt-4">
              Send
            </button>
          </form>
        </div>
      </div>
      
    );
  }
}
