import './App.css'
import Avatar from './components/Avatar';
import Donut from './components/Donut';

function App() {
  return (
    <>
      <Avatar firstName="Bart" lastName="SIMPSON" image="https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png"/>
      <Donut />
      <Avatar firstName="Homer" lastName="SIMPSON" image="https://www.stickees.com/files/cartoon/the-simpsons/2245-homer-simpson-donut.png"/>
      <Donut />
    </>
  )
}

export default App
