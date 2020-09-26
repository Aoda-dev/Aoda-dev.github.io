import React from 'react';
import { assets } from './Assets';
import '../styles/Clouds.css';

export default function Clouds() {
  return (
    <div className="clouds">
      <img className="cloud-1" src={assets.cloud_1} alt="" />
      <img className="cloud-2" src={assets.cloud_3} alt="" />
      <img className="cloud-3" src={assets.cloud_2} alt="" />
      <div className="cloud-div-1"></div>
      <div className="cloud-div-2"></div>
      <div className="cloud-div-3"></div>
      <div className="cloud-div-4"></div>
      <div className="cloud-div-5"></div>
    </div>
  )
}
