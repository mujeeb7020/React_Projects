import { useState, useCallback, useEffect,useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

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
    window.navigator.clipboard.writeText(password)

  }
  
  // useEffect(()=>{
  //   passwordGenerator()
  // },[length,number,char,passwordGenerator])

  const handlePass=()=>{
    passwordGenerator()
  }

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 my-8 text-orange-500 bg-gray-700 text-center">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 rounded-lg"
            placeholder="password"
            readOnly
            ref={usePassRef}
          />
          <button
          onClick={handleCopyPass}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-lg ">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-3 py-1">
          <div>
          <input
           type="range" 
           min={6}
           max={100}
           value={length}
           className="cursor-pointer"
           onChange={(e)=>{setLength(e.target.value)}}
           
           />
           <label >Length: {length}</label>
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
          <label htmlFor="numberInput">Numbers</label>
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
          <label htmlFor="charecterInput">Charecters</label>
        </div>

        <button onClick={handlePass}>click to load</button>
        </div>
        
      </div>
    </>
  );
}

export default App;
