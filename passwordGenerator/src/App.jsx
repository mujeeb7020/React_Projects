import { useState, useCallback, useEffect,useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");
  const [copied,setCopied]=useState(false)

  const passwordGenerator = useCallback(() => {
    let passwrd = "";
    let strng = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) strng += "0123456789";
    if (char) strng += "@#$+={}%[]!";

    for (let i = 1; i <=length; i++) {
      let randomChar = Math.floor(Math.random() * strng.length + 1);
      passwrd += strng.charAt(randomChar);
    }

    setPassword(passwrd);
  }, [length, number, char, password]);

  const usePassRef=useRef(null);

  const handleCopyPass=()=>{
    usePassRef.current?.select();
    console.log("reached")
    usePassRef.current?.setSelectionRange(0,10);
    window.navigator.clipboard.writeText(password);
    setCopied((prev)=>!prev)

  }
  
  useEffect(()=>{
    passwordGenerator()
  },[length,number,char,setPassword])

  // const handlePass=()=>{
  //   passwordGenerator()
  // }

  return (
    <>
      <div className="w-full max-w-xl mx-auto shadow-md rounded-lg px-4 py-8 my-8 text-orange-500 bg-gray-700 text-center">
        <div className="mb-5">
          <p className="text-3xl text-white  border-b-2 ">P@ssword Generator</p>
        </div>
        <div className="flex shadow  overflow-hidden mb-4 gap-5">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-3 px-3 border-blue-500 rounded-sm"
            placeholder="password"
            readOnly
            ref={usePassRef}
          />
          <button
          onClick={handleCopyPass}
          className="outline-none bg-blue-700 text-white px-4 py-0.5 shrink-0 border-blue-500 rounded-md hover:bg-green-600  ">
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-1 justify-around py-1  border-red-500">
          <div className="flex items-center gap-1">
          <input
           type="range" 
           min={6}
           max={100}
           value={length}
           className="cursor-pointer"
           onChange={(e)=>{setLength(e.target.value)}}
           
           />
           <label className="text-lg text-white" >Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
          <input
          type="checkbox"
          defaultChecked={number}
          id="numberInput"
          onChange={()=>{
            setNumber((prev)=>!prev)
          }}
          
          />
          <label htmlFor="numberInput" className="text-lg text-white">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
          type="checkbox"
          defaultChecked={char}
          id="charecterInput"
          onChange={()=>{
            setChar((prev)=>!prev)
          }}
          
          />
          <label htmlFor="charecterInput" className="text-lg text-white">Charecters</label>
        </div>

        </div>
        
      </div>

      {copied && <div className="text-center bg-white py-4 rounded-lg w-full max-w-xl mx-auto absolute left-[29%]">
      <p className="text-3xl text-blue-950">Copied P@ssword of length <span className="bg-green-700 text-white px-3 py-1 rounded">{length}</span></p>
      </div>}

      
    </>
  );
}

export default App;
