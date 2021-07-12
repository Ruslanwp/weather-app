import React, { useMemo } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { AllWeather } from '../weatherInterface';
import Navigation from './Navigation';
import './WeatherList.css'
import moment from 'moment'

const WeatherList: React.FC<{data: AllWeather}> = ({data}) => {
  const today = new Date();
  const date = `${today.getFullYear()}-${(today.getMonth()+1) < 10 ? `0${today.getMonth()+1}` : today.getMonth()+1}-${today.getDate()}`;
  console.log(data);

  console.log(moment().calendar());

  const times = data.list.map(date => new Date(date.dt_txt));
  console.log(times);
  

  const tomorrow = today.setDate(today.getDate() + 1);

  const weatherRange = useTypedSelector(state => state.weather.weatherRange)
  
  const filteredData = useMemo(() => {
    return data.list.map(weather => {
      const possibleDate = new Date(weather.dt_txt)

      const year = possibleDate.getFullYear();
      const month = possibleDate.getMonth();
      const day = possibleDate.getDate();

      const tomorrowDay = new Date(tomorrow).getDate();
      // console.log(tomorrowDay);
      // console.log(date);
      
      


      switch(weatherRange) {
        case 'today':
          return(`${year}-${(month + 1) < 10 ? `0${month + 1}` : (month + 1)}-${day}`);
      
        case 'tomorrow': 
          return(
            `${year}-${(month + 1) < 10 ? `0${month + 1}` : (month + 1)}-${day}` === date
          );

        case 'week': 
          return(`${year}-${(month + 1) < 10 ? `0${month + 1}` : (month + 1)}-${day}`);

        default:
          return(`${year}-${(month + 1) < 10 ? `0${month + 1}` : (month + 1)}-${day}`);
      }
    })
  }, [weatherRange]);

  // console.log(filteredData);
  

  return (
    <>
    <Navigation />
      <div className="weather">
        {data.list.map(day => (
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