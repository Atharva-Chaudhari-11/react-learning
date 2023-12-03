import { useState,useCallback} from "react"


function App() {
  
  const [length,setLength] = useState(8)
  const [numberAllow,setNumberAllow]=useState(false)
  const [charAllow,setCharAllow]=useState(false)
  const [password,setPassword]=useState("")

  // const passwordGenerator = useCallback(fn,dependencies)
  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str= 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllow)  str+='0123456789'
    if(charAllow)  str+="!@#$%^&*(){}<>"

    for (let i = 1; i < length; i++) {
      let char= Math.floor(Math.random() *str.length + 1)
      //char return some index
      pass = str.charAt(char)      
    }
    setPassword(pass)

  },[length,numberAllow,charAllow,setPassword])

  return (
    <>
    <div className="w-full max-w-md shadow-md 
    text-orange-500 bg-gray-800 rounded-lg 
    mx-auto my-8 px-4"> 
    <h1 className="text-white text-center"> password Generator</h1>
      
      <div className="flex shadow rounded-lg overflow-hidden mb-4 mt-2 ">
        <input 
        type="text" 
        value={password}
        className="w-full outline-none px-3 py-1"
        placeholder="password"     
        readOnly  
        />
        <button className=" outline-none bg-blue-700 text-white px-2 py-0.5 shrink-0">
          copy
        </button>
      </div>


      <div className="flex text-sm gap-x-2 py-3">
        
        <div className="flex items-center gap-x-1">
         <input 
         type="range"
         max={100}
         min={8}
         value={length}
         className="cursor-pointer"
         //use onChange to pass the value and move the range bar 
         onChange={(e)=>setLength(e.target.value)}
        />
        <label>Length {length}</label>
        </div>
        
        <div className="flex items-center gap-x-1">
         <input 
         type="checkbox"
         defaultChecked={numberAllow}
         id="numberInput"
         onChange={()=>{
          setNumberAllow((prev) => !prev);
         }}
         />
        <label htmlFor="numberInout">Numbers</label>
        </div>


        <div className="flex items-center gap-x-1">
        <input 
        type="checkbox" 
        defaultChecked={charAllow}
        id="charInput"
        onChange={()=>{
          setCharAllow((prev)=>!prev)
        }} 
        />
        <label htmlFor="charInput">characters</label>
        </div>




      </div>




    </div>
    </>
  )
}

export default App
