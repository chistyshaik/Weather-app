import React, {useState} from 'react';
import axios from 'axios'

/*
Axios is a popular JavaScript library used for making HTTP requests from the browser or Node.js to a server. 
In React, Axios can be used to fetch data from a server and update the state of a component, which triggers a re-render of the UI with the updated data.
when compared to fetch usage of axios is helpful and affective
*/

export default function App() {
  
  const [data , setData] = useState({});
  const [location, setlocation] = useState('') ;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;

  const searchLocation = (event) => {
    if(event.key === 'Enter'){
      axios.get(url).then((response)=>{
        setData(response.data);
        console.log(response.data)
      })
      setlocation('')
    }
  }

  return (
    <div className="app">
      
      <div className="container">
      <div className="search">
        <input 
        value = {location}
        onChange={event => setlocation(event.target.value)}
        placeholder='Enter location'
        onKeyPress={searchLocation}
        type="text" />
      </div>
        <div className="head ">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p>: null}
          </div>
        </div>

        {data.name !== undefined && 
        <div className="foot">
          <div className="feels">
            {data.main ? <p className='bold' >{data.main.feels_like.toFixed()} °F </p> : null }
            <p>Feels like</p>
          </div>
          <div className="humidity">
          {data.main ? <p className='bold' >{data.main.humidity} </p> : null }
            <p>Humidity</p>
          </div>
          <div className="wind">
          {data.wind ? <p className='bold'>{data.wind.speed} mph</p> : null }
            <p>Wind speed</p>
          </div>
        </div>}
        
      </div>
    </div>
  )
}
