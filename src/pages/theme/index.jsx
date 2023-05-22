import React from 'react';
import useTheme from './useTheme.ts';
import './variable.css';
import './index.css';

function Theme() {
  const [theme, setTheme] = useTheme();
  const onChange = (e) => {
    setTheme(e.target.value);
  };
  return (
    <div className="theme-page">
      <h1>{theme}</h1>
      <select className='select-theme' value={theme} onChange={onChange}>
        <option value="OS">跟随系统</option>
        <option value="light">亮色</option>
        <option value="dark">暗色</option>
      </select>
    </div>
  );
}

export default Theme;
