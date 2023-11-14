import { useState, useCallback, useEffect,useRef } from "react";
import "./App.css";
import './index.css'

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
    if(!copied){
      setCopied((prev)=>!prev)
    }

  }
  
  useEffect(()=>{
    passwordGenerator()
  },[length,number,char,setPassword])

  // const handlePass=()=>{
  //   passwordGenerator()
  // }

  return (
    <>
    <div className="bgcolorr">
      <div className="w-full max-w-xl mx-auto shadow-md rounded-lg px-4 py-8 my-8 text-orange-500 bg-[#004246] text-center">
        <div className="mb-5">
          <p className="text-3xl font-bold text-white  border-b-2 border-[#2df8c5] pb-2">P@ssword Generator</p>
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
          className=" btnstyle outline-none bg-[#2df8c5] text-[#525252] px-4 py-0.5 shrink-0 border-[#004246] rounded-md hover:bg-green-600 hover:text-white  ">
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-1 justify-around py-1  border-red-500">
          <div className="flex items-center gap-1">
          <input
           type="range" 
           min={6}
           max={10}
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

      {copied && <div className="text-center bg-[#004246] py-4 rounded-lg w-full max-w-xl mx-auto absolute left-[29%]">
      <p className="text-3xl text-white">Copied P@ssword of length <span className="bg-[#2df8c5] text-[#004246] px-3 py-1 rounded">{length}</span></p>
      </div>}

      </div>
    </>
  );
}

export default App;
