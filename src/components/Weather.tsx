import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getWeather } from '../api';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { AllWeather } from '../weatherInterface';
import WeatherList from './WeatherList';

const Weather = () => {
  const state = useTypedSelector(state => state.weather);
  console.log(state);
  
  const [data, setData] = useState<null | AllWeather>(null);

  const recieveData = async () => {
    const data = await getWeather();
    console.log(data);
    
    setData(data)
  }

  useEffect(() => {
    recieveData();
  }, [])

  console.log(data);
  
  if (!data) {
    return (
      <p>123</p>
    )
  }

  return (
    <div>
      <WeatherList data={data}/>
    </div>
  );
};

export default Weather;