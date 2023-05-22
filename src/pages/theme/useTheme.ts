import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'OS';

const LOCAL_THEME_KEY = '__theme__';

const match = matchMedia('(prefers-color-scheme: dark)');

function followOS() {
  if (match.matches) {
    document.documentElement.dataset.theme = 'dark';
  } else {
    document.documentElement.dataset.theme = 'light';
  }
}

export default function useTheme() {
  const [theme, setTheme] = useState<Theme>(localStorage.getItem(LOCAL_THEME_KEY) as Theme || 'light');
  
  useEffect(() => {
    localStorage.setItem(LOCAL_THEME_KEY, theme);
    if (theme === 'OS') {
      followOS();
      match.addEventListener('change', followOS);
    } else {
      document.documentElement.dataset.theme = theme;
      match.removeEventListener('change', followOS);
    }
  }, [theme]);

  return [theme, setTheme];
}