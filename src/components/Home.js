import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <div className="text-gray-400 p-20 pt-48 flex h-100">
        <article className='p-5'>
          <img src='https://myepi.episousse.com.tn/Actualities/61.jpg'></img>
          <h5>Journée scientifique BAUHAUS 100 ans (1919-2019)</h5>
        </article>
        <article className='p-5'>
          <img src='https://myepi.episousse.com.tn/Actualities/60.PNG'></img>
          <h5>Formation de perfectionnement</h5>
        </article>
        <article className='p-5'>
          <img src='https://myepi.episousse.com.tn/Actualities/59.jpg'></img>
          <h5>Semaine d'integration</h5>
        </article>
        <article className='p-5'>
          <img src='https://myepi.episousse.com.tn/Actualities/58.png'></img>
          <h5>Compte Office 365 pour étudiants en Informatique</h5>
        </article>
        <article className='p-5'>
          <img src='https://myepi.episousse.com.tn/Actualities/57.JPG'></img>
          <h5>IEEEXtreame 13.0</h5>
        </article>
        <article className='p-5'>
          <img src='https://myepi.episousse.com.tn/Actualities/56.png'></img>
          <h5>Certification ISO 9001</h5>
        </article>
      </div>
    );
  }
}
