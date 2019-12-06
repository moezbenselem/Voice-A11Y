import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="flex text-gray-400 p-32 pt-32 bg-gray-900 h-100 pb-56">
        <div className="w-1/2">
          <div className="float-right">
            <h2>CONTACT</h2>
            </div>
            <div className="float-right text-gray-400 p-32 pt-20 bg-gray-900 h-100">
        
          
            <h6>say <span className='font-bold'>Next </span>To Pass from an input to the next</h6>
            <br></br>
            <h6>say <span className='font-bold'>Email | Name | Subjeect | Text </span>To select it</h6>
            <br></br>
            <h6>say <span className='font-bold'>Send </span>To send the Email</h6>
            <br></br>
            <h6>say <span className='font-bold'>Delete </span>To delete a single word</h6>
            <br></br>
            <h6>say <span className='font-bold'>Stop </span>To Clear the input</h6>
          
        
      
          </div>
        </div>
        <div className="mt-8 ml-20 w-1/5">
          <form className="">
            <input
              id='nom'
              type="text"
              required
              placeholder="Name *"
              className="placeholder-red-800"
            />
            <input
            id='email'
              type="email"
              required
              placeholder="Email *"
              className="placeholder-red-800"
            />
            <input id = 'sujet' type="text" placeholder="Subject" className="" />
            <textarea
            id = "text"
              placeholder="Your Message..."
              className="mt-5 resize-none h-40 bg-gray-800 p-2"
            />
            <button id='envoi' className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded float-right mt-4">
              Send
            </button>
          </form>
        </div>
      </div>
    );
  }
}
