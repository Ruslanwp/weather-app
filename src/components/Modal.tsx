import React from 'react';
import { useDispatch } from 'react-redux';
import { selectPopup } from '../store/reducers/weatherReducer';
import { DayWeather } from '../weatherInterface';

interface Props {
  popup: DayWeather
}

export const Modal: React.FC<Props> = ({popup}) => {
  const dispatch = useDispatch();

  const onPopupClose = () => {
    dispatch(selectPopup(null));
  }

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={onPopupClose}></div>
      <div className="modal-card" style={{width: '90vw'}}>
        <header className="modal-card-head">
          <p className="modal-card-title">Extra data</p>
          <button onClick={onPopupClose} className="delete" aria-label="close"></button>
        </header>
        <section className="modal-card-body">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <p>Mostly {popup.weather[0].main}, {popup.weather[0].description}!</p>
            <img width="70px" src={`https://openweathermap.org/img/w/${popup.weather[0].icon}.png`}></img>
          </div>
          

          <p>Wind speed: {popup.wind.speed} mph.</p>
          <p>Wind gust: {popup.wind.gust} mph.</p>
          <p>Humidity: {popup.main.humidity}%</p>
          <p>Atmosphere presure: {popup.main.pressure} mm</p>
        </section>
      </div>
    </div>
  );
};
