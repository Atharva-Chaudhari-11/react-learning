import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [counter,setCounter] = useState(15)
  //let counter=11
  //useSate use to change the state  [variable,function]
  // useState is automatically change it at all places 
  
  const addValue =()=>{

    if(counter >= 20){
     return;
    }else{
    console.log("clicked",counter)
    counter =counter+1;
    // AtharvaCounter(counter +1)
    setCounter(counter)
    }
  }

  const removeVal=()=>{
    if(counter > 0){
    counter = counter-1;
    setCounter(counter);
      }else if(counter < 0){
      return;
      }
  }
  return (
    <>
 <h1>Chai aur react </h1>
 <h2>counter value: {counter} </h2>
 <button
 onClick={addValue}
 >add value</button> 
 <br />
 <button
 onClick={removeVal}
 >remove value</button>

    </>
  )
}

export default App
