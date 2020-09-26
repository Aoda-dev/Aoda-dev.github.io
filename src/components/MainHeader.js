import React from 'react';
import { assets } from './Assets';
import Clock from './Clock';
import Clouds from './Clouds';
import Stars from './Stars';
import '../styles/MainHeader.css';

export default function MainHeader() {
  return (
    <div className="main-header">
      <Clock />
      <Clouds />
      <Stars />
      <img className="moon" src={assets.moon} alt=""/>
      <img className="eiffelTower" src={assets.eiffelTower} alt=""/>
      <div className="main-header-text">
        <span>FRANCE</span>
        <div className="main-header-text-bottom"></div>
      </div>
    </div>
  )
}
