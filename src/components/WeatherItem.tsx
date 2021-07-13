import moment from 'moment';
import React from 'react';
import { useDispatch } from 'react-redux';
import { selectPopup } from '../store/reducers/weatherReducer';
import { DayWeather } from '../weatherInterface';
import './WeatherItem.css';

type Props = {
  day: DayWeather
  city: string
}

const WeatherItem: React.FC<Props> = ({day, city}) => {
  const dispatch = useDispatch()
  const date = moment(day.dt_txt).format('LLLL');

  const HandleSelectPopup = (day: DayWeather) => {
    dispatch(selectPopup(day))
  };

  return (
    <>
      <div className="card">
        <header className="card-header has-background-primary-dark">
          <p className="card-header-title has-text-white">
            {city}
          </p>
          <button className="card-header-icon" aria-label="more options">
            <span className="icon">
              <img src={`https://openweathermap.org/img/w/${day.weather[0].icon}.png`}></img>
            </span>
          </button>
        </header>
        <div className="card-content has-background-info-light">
          <div className="content">
            <div style={{textAlign: 'center'}}>Feels like {Math.floor(day.main.feels_like * 10) / 10} t°C</div>
            <div className="temperature" style={{display: 'flex', justifyContent: 'space-around', textAlign: 'center'}}>
              <div>
                <p style={{margin: '8px 0 0'}}>Min</p>
                <p>{Math.floor(day.main.temp_min * 10) / 10} t°C</p>  
              </div>
              <div>
                <p style={{margin: '8px 0 0'}}>Max</p>
                <p>{Math.floor(day.main.temp_max * 10) / 10} t°C</p>  
              </div>
            </div>
            <div style={{textAlign: 'center', marginTop: '15px'}}><strong>{date}</strong></div>
          </div>
        </div>
        <footer className="card-footer">
          <a onClick={() => HandleSelectPopup(day)} className="card-footer-item">More Info</a>
        </footer>
      </div>
    </>
  );
};

export default WeatherItem;