import React, {useState} from 'react';
import axios from 'axios'

export default function App() {
  const APIkey = '895284fb2d2c50a520ea537456963d9c' ;
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=895284fb2d2c50a520ea537456963d9c';



  return (
    <div className="app">
      <div className="container">
        <div className="head ">
          <div className="location">
            <p>dallas</p>
          </div>
          <div className="temp">
            <h1> 63°F </h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="foot">
          <div className="feels">
            <p className='bold'>65°F</p>
            <p>Feels like</p>
          </div>
          <div className="humidity">
            <p className='bold'>20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className='bold'>11 MPH</p>
            <p>Wind speed</p>
          </div>
        </div>
      </div>
    </div>
  )
}
