import { Dispatch } from "react";
import { fetchWeather } from "./store/reducers/weatherReducer";
import { AllWeather } from "./weatherInterface";

const API_KEY = '055492e51f32a94adbc9b075f73e863d';

type Action = {
  type: string
  payload: AllWeather | null
}

export const getWeather = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=524901&units=metric&appid=${API_KEY}`);
      const data = await response.json();
      
      return dispatch(fetchWeather(data))
    } catch (error) {
      throw new Error('data loading failed') 
    }
  }
}
