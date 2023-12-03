import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

let myarray={
  name:"ATharvavaaaa",
  age:21
}

let arrayy=[1,2,3,4,5,6]
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Atharva here with tailwind</h1>
  {/*<Card username="Atharva" subone={myarray}/> */}
  {/* <Card username="Atharva" subone={arrayy}/> */}
  {/* here i can pass two values at a time */}
  <Card username="Atharva" btnText="click me"/>
  
  <Card username="Srushti" btnText="Check out"/>
    </>
  )
}

export default App
