import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Avatar from './components/Avatar';

function App() {
  return (
    <>
      <Avatar firstName="Bart" lastName="SIMPSON" image="https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png"/>
      <Avatar firstName="Bart" lastName="SIMPSON" image="https://www.stickees.com/files/cartoon/the-simpsons/2245-homer-simpson-donut.png"/>
    </>
  )
}

export default App
