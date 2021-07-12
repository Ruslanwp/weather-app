import { DayWeather } from "../../weatherInterface";

const FETCH_WEATHER = 'FETCH_WEATHER';
const SET_RANGE = 'SET_RANGE';

interface WeatherState {
  weatherData: null | DayWeather[]
  weatherRange: string
}

interface WeatherAction {
  type: string
  payload?: any
}

const initialState: WeatherState = {
  weatherData: null,
  weatherRange: 'week'
} 

export const weatherReducer = (state = initialState, action: WeatherAction): WeatherState => {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        ...state,
        weatherData: action.payload
      }

    case SET_RANGE:
      return {
        ...state,
        weatherRange: action.payload
      }

    default:
    return state;
  }
}