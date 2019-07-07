import React from 'react';
import './App.css';

import Form from "./components/Form"
import WeatherBackGround from "./image/WeatherBackGround.jpeg"

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
    description: null,
    err: null
  }
}

  onFormSubmit = async (e) =>{
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    
    if(this.state.err){
      this.setState ({
        city: null,
        country: null,
        humidity: null,
        temp: null,
        description: null,
    })
  }
    if(!city || !country){
      this.setState({
        err: "Không được bỏ trống"
      })
      return
    }
    else{
    let response = await fetch(` https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    let data =  await response.json()
      if(data.cod == "404"){
        this.setState({
          err: "Nhập sai tên thành phố hoặc quốc gia mời nhập lại"
        })
        return
      }
      else{
        this.setState({
          err: null
        })
      }
    this.setState({
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      temp: data.main.temp,
      description: data.weather[0].main,
      err: null
    })
  }
  }
  
  render(){
    const styleLeftSide = {
      backgroundImage: `url(${WeatherBackGround})`
    }
  return (
    <div className="App">
      <div className = "wraper">
      <div className = "left-side" style={ styleLeftSide}> 
      <h1>Weather App</h1>
      <p>Helps you find weather conditions in city</p>
      </div>
      <div className = "right-side">
        <h1>Nhập thành phố và quốc gia</h1>
        <Form onSubmit = {this.onFormSubmit} />
        <Information 
         city = {this.state.city}
         country = {this.state.country}
         humidity = {this.state.humidity}
         temp = {this.state.temp}
         description = {this.state.description}
         error = {this.state.err}
        />
      </div>
      </div>
    </div>
  );
  }
}

export default App;
