import { AllWeather, DayWeather } from "../../weatherInterface";

const FETCH_WEATHER = 'FETCH_WEATHER';
const SET_RANGE = 'SET_RANGE';
const SET_POPUP = 'SET_POPUP';

interface WeatherState {
  weatherData: null | AllWeather
  weatherRange: string
  popup: null | DayWeather
}

interface WeatherAction {
  type: string
  payload?: any
}

const initialState: WeatherState = {
  weatherData: null,
  weatherRange: 'today',
  popup: null
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

    case SET_POPUP:
      return {
        ...state,
        popup: action.payload
      }

    default:
      return state;
  }
};

export const setDay = (value: string) => ({type: SET_RANGE, payload: value});
export const fetchWeather = (data: AllWeather | null) => ({type: FETCH_WEATHER, payload: data});
export const selectPopup = (data: DayWeather | null) => ({type: SET_POPUP, payload: data});
