import React from 'react';
import './App.css';

import Form from "./components/Form"
import RainBackGround from "./image/RainBackGround.jpg"

import Information from "./components/Information"

const API_KEY = '07cde7ebe6c8b28d6a1c941fab821a95'
// https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=YOUR_API_KEY 
class App extends React.Component {
 
constructor(props){
  super(props)
  this.state = {
    city: null,
    country: null,
    humidity: null,
    temp: null,
    description: null
  }
}

  onFormSubmit = async (e) =>{
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    let response = await fetch(` https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    let data =  await response.json()
    console.log(data)
    this.setState({
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      temp: data.main.temp,
      description: data.weather[0].main
    })
  }
  
  render(){
    const styleLeftSide = {
      backgroundImage: `url(${RainBackGround})`
    }
  return (
    <div className="App">
      <div className = "left-side" style={ styleLeftSide}> </div>
      <div className = "right-side">
        <h1>My Weather App</h1>
        <Form onSubmit = {this.onFormSubmit} />
        <Information 
         city = {this.state.city}
         country = {this.state.country}
         humidity = {this.state.humidity}
         temp = {this.state.temp}
         description = {this.state.description}
        />
      </div>
    </div>
  );
  }
}

export default App;
