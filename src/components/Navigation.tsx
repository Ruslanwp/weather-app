import React from 'react';

const Navigation = () => {
  return (
    <header>
      <nav style={{padding: '40px 0', display: 'flex', justifyContent: 'space-between'}}>
        <a>logo</a>
        <div>
          выбрать дату
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