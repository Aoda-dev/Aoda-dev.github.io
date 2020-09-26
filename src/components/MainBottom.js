import React from 'react';
import '../styles/MainBottom.css';
import { Weather } from './Weather';
import { assets } from './Assets'

export default function MainBottom() {
  return (
    <div className="main-bottom">
      <div className="main-twitter">
        <div className="main__twitter">
          <img src={assets.twiiter[0]} alt="" />
          <h2>Twitter Feed</h2>
          <small>#france</small>
        </div>
        <div className="main__twitter__content">
          <div className="main__twitter__icons twit-1">
            <img src={assets.twiiter[1]} alt="" />
            <small> Don't Forget your sunscreen <br /> tomorrow! </small>
          </div>
          <div className="main__twitter__icons">
            <img src={assets.twiiter[2]} alt="" />
            <small> Amazing Weather in Paris </small>
          </div>
        </div>
        <div className="main-twitter-scroll"></div>
      </div>
      <div className="main-weather">
        <Weather weather={'RAINING'} gradus={18} day={'MON'} src={assets.weather[0]} />
        <Weather weather={'SUNNY'} gradus={26} day={'TUE'} src={assets.weather[1]} />
        <Weather weather={'CLOUDY'} gradus={22} day={'WED'} src={assets.weather[2]} />
        <Weather weather={'STROM'} gradus={19} day={'THU'} src={assets.weather[3]} />
        <Weather weather={'CLOUDY'} gradus={23} day={'FRI'} src={assets.weather[4]} />
       </div>
    </div>
  )
}
