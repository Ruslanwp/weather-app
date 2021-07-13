import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { setDay } from '../store/reducers/weatherReducer';
import Logo from './weatherLogo.png';
import './Navigation.css';

const Navigation = () => {
  const dispatch = useDispatch();
  const dateRange = useTypedSelector(state => state.weather.weatherRange);

  const onSelectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setDay(event.target.value))
  }

  return (
    <header className="has-background-link-light">
      <nav className="navigation" style={{background: 'primary'}}>
        <a>
          <img style={{width: '60px'}} src={Logo}></img>
        </a>
        <div>
          <label htmlFor="daySelector">Weather forecast on </label>
          <select id="daySelector" value={dateRange} onChange={onSelectHandler}>
            <option value="today">
              today
            </option>
            <option value="tomorrow">
              tomorrow
            </option>
            <option value="week">
              week
            </option>
          </select>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
