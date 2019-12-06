import React, { Component } from "react";
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import ServiceResult from "./ServiceResult";
export default class Services extends Component {
  render() {
    return (
      <div className="text-gray-400 p-32 pt-20 bg-gray-900 h-full">
        
            <h5>say <span className='font-bold'>Class </span>To Show the list of students of your class</h5>
            <br></br>
            <h5>say <span className='font-bold'>Events </span>To Show the latest events</h5>
            <br></br>
            <h5>say <span className='font-bold'>Grades </span>To Show your Grades</h5>
        
      </div>
    );
  }
}
