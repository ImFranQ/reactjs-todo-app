// import logo from './logo.svg';
import { useState } from 'react';

import Header from './components/Header'
import TodoList from './components/TodoList'
import './App.css';

import iconSun from './aseets/images/icon-sun.svg'
import iconMoon from './aseets/images/icon-moon.svg'

const AppContentHeader = (props) => {
  const { changeMode, isDarkMode } = props
  
  return (
    <div className="App-content-header">
      <div className="App-title">TODO</div>
      <div>
        <button className="btnChangeMode" onClick={() => changeMode()}>
          <img src={isDarkMode ? iconSun : iconMoon } />
        </button>
      </div>
    </div>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`App${darkMode?' dark-mode': ''}`}>
      <Header isDarkMode={darkMode} />

      <div className="App-body">
        <div className="App-content">
          <AppContentHeader
            isDarkMode={darkMode}
            changeMode={() => setDarkMode(!darkMode)} />
          
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
