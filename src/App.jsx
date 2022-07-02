import React, { useEffect, useState } from 'react'
import HeroSection from './components/HeroSection'

const App = () => {

  const [theme, setTheme] = useState(null);


  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  useEffect(()=>{
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
    else{
      setTheme('light');
    }
  },[]);

  useEffect(()=>{
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
    else{
      document.documentElement.classList.remove('dark');
    }
  }, [theme])

  return (
      <>
        <button type='button' onClick={handleThemeSwitch} className='fixed z-10 right-2 top-2 bg-indigo-500 text-lg p-1 rounded-md'>
          {theme === 'dark' ? '🌞' : '🌙'}
        </button>
            <div className="font-inter bg:white dark:bg-slate-900">
              <HeroSection/>
        
            </div>
      </>
    )
}

export default App