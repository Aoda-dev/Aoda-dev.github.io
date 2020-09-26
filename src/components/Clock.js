import React from 'react';
import '../styles/Clock.css';

export default function Clock() {
  return (
    <div className="clock">
      <span className="span-clock">12</span>
      <span className="span-weather-name">CLOUDLY</span>
      <span className="span-humi">HUMIDITY</span>
      <div className="stick"></div>
      <span className="span-humi-value">64%</span>
      <span className="span-wind">WIND</span>
      <span className="span-wind-value">12 K/M</span>
    </div>
  )
}
