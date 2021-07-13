import React, { useEffect, useMemo } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { AllWeather, DayWeather } from '../weatherInterface';
import Navigation from './Navigation';
import './WeatherList.css';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { getWeather } from '../api';
import WeatherItem from './WeatherItem';
import { Modal } from './Modal';

const WeatherList: React.FC = () => {
  const data = useTypedSelector<AllWeather | null>(state => state.weather.weatherData);
  const popup = useTypedSelector<DayWeather | null>(state => state.weather.popup);

  const today = moment().format('l');
  const tomorrow = moment().add(1, 'days').format('l');

  const dispatch = useDispatch();
  const weatherRange = useTypedSelector(state => state.weather.weatherRange);

  useEffect(() => {
    dispatch(getWeather());
  }, []);

  const filteredWeather = useMemo(() => {
    if (!data) {
      return null;
    }

    return data.list.filter((weather: DayWeather) => {
      const possibleDay = moment(weather.dt_txt).format('l')

      switch(weatherRange) {
        case 'today':
          return possibleDay === today;
      
        case 'tomorrow': 
          return possibleDay === tomorrow;

        case 'week':
          return weather

        default:
          return weather;
      }
    })
  }, [weatherRange, data]);

  if (!data || !filteredWeather) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Navigation />
      <div className="weather" style={{margin: '30px 0'}}>
        {filteredWeather.map((day: DayWeather) => (
          <WeatherItem
            key={day.dt}
            day={day}
            city={data.city.name}
          />
        ))}
      </div>
      {popup && <Modal popup={popup}/>}
    </>
  );
};

export default WeatherList;