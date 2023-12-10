import { useState,useCallback,useEffect,useRef} from "react"

//useSate --> It is use to make the continuous changes at multiple times
//useCallBack --> It is use to call the multiple filds using the dependencis
//useEffect --> it is use to make the effect to call a function on selected dependemcis
//useRef --> it ref the some filds like--see the selection part in input 

function App() {
  
  const [length,setLength] = useState(8)
  const [numberAllow,setNumberAllow]=useState(false)
  const [charAllow,setCharAllow]=useState(false)
  const [password,setPassword]=useState("")

  const PasswordRef =useRef(null)



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
      pass += str.charAt(char)      
    }
    setPassword(pass)

  },[length,numberAllow,charAllow,setPassword])

  const copyCurrentClipboard = useCallback(()=>{
    PasswordRef.current?.select()
    // PasswordRef.current?.setSelectionRange(0,3)  
    //setSelectionRange() is use to select the password in range
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllow,charAllow,passwordGenerator])

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
       ref={PasswordRef}
        />
        <button className=" hover:bg-red-800 outline-none focus:ring-4 focus:ring-green-300 bg-blue-700 text-white px-2 py-0.5 shrink-0"
        onClick={copyCurrentClipboard}
        >
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
