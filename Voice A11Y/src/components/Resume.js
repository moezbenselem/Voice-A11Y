import React, { Component } from "react";

export default class Resume extends Component {
  render() {
    return (
      <div className="text-gray-400 p-32 pt-20 bg-gray-900 h-100">
        <h1>RESUME</h1>
        <hr className="mt-0 mb-6"></hr>
        <div className="flex">
          <div className="ml-10 w-3/5">
            <div className="flex mb-10">
              <h5 className="bg-blue-500 inline-block p-10 w-full h-full center rounded-full">
                Personal Informations
              </h5>
              <p className="ml-10 mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi
                est sit amet facilisis magna etiam. Vel quam elementum pulvinar
                etiam non quam lacus suspendisse. Consectetur adipiscing elit ut
                aliquam purus sit amet luctus. Faucibus in ornare quam viverra
                orci sagittis. At in tellus integer feugiat scelerisque varius
                morbi enim. Velit euismod in pellentesque massa placerat duis.
                Gravida neque convallis a cras semper. Suspendisse sed nisi
                lacus sed viverra tellus in hac. Vitae tortor condimentum
                lacinia quis vel eros donec.
              </p>
            </div>
            <hr className="mt-0 mb-6"></hr>
            <div className="flex mb-10">
              <h5 className="bg-blue-500 inline-block p-10 rounded-full center h-full w-3/5 ">
                Experience
              </h5>
              <div className="ml-10 mt-6">
                <div>
                  <p className="text-2xl">Job position. Click to edit</p>
                  <p className="text-xl mb-2">the date</p>
                  <p className="text-1xl">
                    I'm a paragraph. Click here to add your own text and edit
                    me. It’s easy. Just click “Edit Text” or double click me and
                    you can start adding your own content and make changes to
                    the font. Feel free to drag and drop me anywhere you like on
                    your page. I’m a great place for you to write more. Tell a
                    story about yourself.
                  </p>
                </div>
                <div>
                  <p className="text-2xl mt-10">Job position. Click to edit</p>
                  <p className="text-xl mb-2">the date</p>
                  <p className="text-1xl">
                    I'm a paragraph. Click here to add your own text and edit
                    me. It’s easy. Just click “Edit Text” or double click me and
                    you can start adding your own content and make changes to
                    the font. Feel free to drag and drop me anywhere you like on
                    your page. I’m a great place for you to write more. Tell a
                    story about yourself.
                  </p>
                </div>
                <div>
                  <p className="text-2xl mt-10">Job position. Click to edit</p>
                  <p className="text-xl mb-2">the date</p>
                  <p className="text-1xl">
                    I'm a paragraph. Click here to add your own text and edit
                    me. It’s easy. Just click “Edit Text” or double click me and
                    you can start adding your own content and make changes to
                    the font. Feel free to drag and drop me anywhere you like on
                    your page. I’m a great place for you to write more. Tell a
                    story about yourself.
                  </p>
                </div>
              </div>
            </div>
            <hr className="mt-0 mb-6"></hr>
            <div className="flex mb-10">
              <h5 className="bg-blue-500 inline-block p-10 rounded-full w-full h-full center ">
                Education
              </h5>
              <p className="ml-10 mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi
                est sit amet facilisis magna etiam. Vel quam elementum pulvinar
                etiam non quam lacus suspendisse. Consectetur adipiscing elit ut
                aliquam purus sit amet luctus. Faucibus in ornare quam viverra
                orci sagittis. At in tellus integer feugiat scelerisque varius
                morbi enim. Velit euismod in pellentesque massa placerat duis.
                Gravida neque convallis a cras semper. Suspendisse sed nisi
                lacus sed viverra tellus in hac. Vitae tortor condimentum
                lacinia quis vel eros donec.
              </p>
            </div>
          </div>
          <div className="ml-20">
            <div className='mb-16'>
              <h5>Skills</h5>
              <hr className="mt-0 mb-6"></hr>
              <div className="ml-4">
                <h6>Photoshop</h6>
                <h6>Microsoft Office</h6>
                <h6>Unity</h6>
                
              </div>
            </div>
            <div className='mb-16'>
              <h5>Languages</h5>
              <hr className="mt-0 mb-6"></hr>
              <div className="ml-4">
                <h6>HTML / CSS</h6>
                <h6>PHP</h6>
                <h6>C / C#</h6>
                <h6>Javascript</h6>
                <h6>Java / Android</h6>
                <h6>Python</h6>
              </div>
            </div>
            <div className='mb-16'>
              <h5>Databases</h5>
              <hr className="mt-0 mb-6"></hr>
              <div className="ml-4">
                <h6>SQL Databases</h6>
                <h6>NoSQL Databases</h6>
                <h6>Firebase</h6>
                <h6>MongoDb</h6>
              </div>
            </div>
            <div className='mb-16'>
              <h5>Frameworks</h5>
              <hr className="mt-0 mb-6"></hr>
              <div className="ml-4">
                <h6>Node Js</h6>
                <h6>React Js</h6>
                <h6>Electron Js</h6>
                <h6>Tailwind Css</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
