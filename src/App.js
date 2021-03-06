import { useContext } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'

import { HiSun } from 'react-icons/hi'
import { BsFillMoonFill } from 'react-icons/bs'

import Button from './Components/Button';
import './GlobalStyles/index.css';

import routes from './Data/JavascriptData/routes';
import { ContextApi } from './GlobalStatesComponent/GlobalState';
import Menu from './Components/Menu';

function App() {
  const { theme, setTheme } = useContext(ContextApi)

  const {pathname} = useLocation()
 

  return (
    <div className={`app ${theme}`}>
      <Menu path={pathname}/>
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
