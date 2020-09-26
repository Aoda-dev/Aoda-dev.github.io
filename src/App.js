import React from 'react';
import { assets } from './components/Assets';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import './styles/App.css';


function App() {
  const date = {
    months: [
      'January', 'February', 'March', 
      'April', 'May', 'June', 'July', 
      'August', 'September', 'October',
      'November', 'December'
    ],
    days: [
      ['Monday', 'MON'], ['Tuesday', 'TUE'], ['Wednesday', 'WED'], 
      ['Thursday', 'THU'], ['Friday', 'FRI'], ['Saturday', 'STR'], ['Sunday', 'SUN']]
  }

  function getDate() {
    const _date = new Date();

    return `${date.days[_date.getDay() - 1][0]}, ${_date.getDate()}th ${date.months[_date.getMonth()]}`
  }

  const openNav = () => {
    document.querySelector('.App-sidebar').classList.add('active');
    setTimeout(() => {
      document.querySelector('.App-sidebar').style.opacity = '1';
    }, 0);
  }

  const toHome = () => {
    return new Promise(resolve => {
      document.querySelector('.App-sidebar').style.opacity = '0';
      setTimeout(() => {
        resolve();
      }, 500);
    })
     .then(() => {
        document.querySelector('.App-sidebar').classList.remove('active');
     })
  }


  return (
    <div className="App">
      <header className="App-header">
        <Sidebar toHome={toHome}/>
        <img src={assets.menu} alt="" onClick={() => { openNav(); }}/>
        <span>{ getDate() }</span>
      </header>
      <main>
        <img className="circle" src={assets.circle} alt="" />
        <Main />
      </main>
    </div>
  );
}

export default App;
