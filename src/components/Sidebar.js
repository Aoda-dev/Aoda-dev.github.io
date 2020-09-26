import React from 'react'
import { Avatar } from './Avatar'

export default function Sidebar({ toHome }) {
  return (
    <div className="App-sidebar">
      <div className="App-inside-sidebar">
        <ul>
          <li><a href="#home" onClick={() => { toHome() }}>Home</a></li>
          <li><a href="https://github.com/Aoda-dev/">Github</a></li>
        </ul>
      </div>
      <Avatar />
    </div>
  )
}
