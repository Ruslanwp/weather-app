import React, { useMemo } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { AllWeather } from '../weatherInterface';
import Navigation from './Navigation';
import './WeatherList.css'

const WeatherList: React.FC<{data: AllWeather}> = ({data}) => {
  const today = new Date();
  const date = `${today.getFullYear()}-${(today.getMonth()+1) < 10 ? `0${today.getMonth()+1}` : today.getMonth()+1}-${today.getDate()}`;
  console.log(date);

  const weatherRange = useTypedSelector(state => state.weather.weatherRange)
  
  const filteredData = useMemo(() => {
    return data.list.filter(weather => {
      return weather.dt_txt.split(' ')[0] === date
    })
  }, [weatherRange])
  
  console.log(filteredData[0].dt_txt.split(' ')[0]);
  console.log(data);
  
  return (
    <>
    <Navigation />
      <div className="weather">
        {filteredData.map(day => (
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                {data.city.name}
              </p>
              <button className="card-header-icon" aria-label="more options">
                <span className="icon">
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </header>
            <div className="card-content">
              <div className="content">
                <p>Минимальная температура {day.main.temp_min} C</p>
                <p>Максимальная температура {day.main.temp_max} C</p>
                <div>{day.main.feels_like} C</div>
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