import React from 'react';

const Navigation = () => {
  return (
    <header>
      <nav style={{padding: '40px 20px', display: 'flex', justifyContent: 'space-between', background: 'green'}}>
        <a>logo</a>
        <div>
          Прогноз погоды на 
          <select>
            <option>
              сегодня
            </option>
            <option>
              завтра
            </option>
            <option>
              неделя
            </option>
          </select>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
