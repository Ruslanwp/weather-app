import React from 'react';
import { AllWeather } from '../weatherInterface';
import Navigation from './Navigation';
import './WeatherList.css'

const WeatherList: React.FC<{data: AllWeather}> = ({data}) => {
  console.log(data.list.map(day => (
    day.dt
  )));

  console.log(data.list[0].dt_txt.split(' '));
  
  
  return (
    <>
    <Navigation />
      <div className="weather">
        {data.list.map(day => (
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                Component
              </p>
              <button className="card-header-icon" aria-label="more options">
                <span className="icon">
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </header>
            <div className="card-content">
              <div className="content">
                <p>Минимальная температура {day.main.temp_min} градусов цельсия</p>
                <p>Максимальная температура {day.main.temp_max} градусов цельсия</p>
                <div>{day.main.feels_like} градусов цельсия</div>
                {day.dt_txt}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WeatherList;