import { useState } from "react"


function App() {
  const [color,setColor]=useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}} 
    >
      <div  className="fixed flex flex-wrap
     justify-center bottom-12 inset-x-0 px-2">
      <div className=" fixed flex-wrap justify-center shadow-lg gap-3 bg-white px-2 py-2 rounded-xl">
        
        <button className="outline-none px-4 py-1 text-white shadow-lg rounded-full
        "style={{backgroundColor: "red"}}
        onClick={()=>setColor("red")}
        >red</button>
        
        <button className="outline-none px-4 py-1 text-white shadow-lg rounded-full
        "style={{backgroundColor: "indigo"}}
        onClick={()=>setColor("indigo")}
        >indigo</button>

        <button className="outline-none px-4 py-1 text-white shadow-lg rounded-full
        "style={{backgroundColor: "purple"}}
        onClick={()=>setColor("purple")}
        >purple</button>
        
        <button className="outline-none px-4 py-1 text-white shadow-lg rounded-full
        "style={{backgroundColor: "orange"}}
        onClick={()=>setColor("orange")}
        >orange</button>
        
        <button className="outline-none px-4 py-1 text-white shadow-lg rounded-full
        "style={{backgroundColor: "lavender"}}
        onClick={()=>setColor("lavender")}
        >lavender</button>
        
        <button className="outline-none px-4 py-1 text-white shadow-lg rounded-full
        "style={{backgroundColor: "aqua"}}
        onClick={()=>setColor("aqua")}
        >aqua</button>
        
        
        
        </div>
      </div>
       

    </div>
  )
}

export default App
