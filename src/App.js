import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom'

import { HiSun } from 'react-icons/hi'
import { BsFillMoonFill } from 'react-icons/bs'

import Menu from './Components/Menu/Menu';
import Button from './Components/Button';
import './GlobalStyles/index.css';

import routes from './Data/JavascriptData/routes';
import { ContextApi } from './GlobalStatesComponent/GlobalState';

function App() {
  const { theme, setTheme } = useContext(ContextApi)

  return (
    <div className={`app ${theme}`}>
      <Menu />
      <div className="theme-mode">
        <Button icon={theme === "theme-light" ? BsFillMoonFill : HiSun} onClick={() => {
          setTheme(theme === "theme-light" ? "theme-dark" : "theme-light")
        }} />
      </div>
      <Routes>
        {
          routes.map((route, index) => {
            const Component = route.component
            return (
              <Route
                key={index}
                path={route.to}
                element={<Component />}
              />
            )
          })
        }
      </Routes>
    </div>
  );
}

export default App;
