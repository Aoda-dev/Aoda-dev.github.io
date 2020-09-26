import React from 'react';
import '../styles/Content.css';
import MainBottom from './MainBottom';
import MainHeader from './MainHeader';
import MainMain from './MainMain';

function Main() {
  return (
    <div className="wrapper">
      <MainHeader />
      <MainMain />
      <MainBottom />
    </div>
  )
}


export default Main