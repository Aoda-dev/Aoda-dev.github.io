import React from 'react'

export const Weather = (props) => {
  return (
    <div className="main-weather-icons">
      <h3>{ props.day }</h3>
      <img src={ props.src } alt="" />
      <p className="p1">{ props.gradus }</p>
      <small className="p2">{ props.weather }</small>
    </div>
  )
}
