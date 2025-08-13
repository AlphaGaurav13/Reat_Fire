import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");


  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) {
      str += "0123456789";
    }

    if(charAllowed) {
      str += "!@#$%^&*";
    }

    for(let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPassToClipboard = useCallback(() => {

    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password]);
  useEffect(() =>  {
    passwordGenerator()
  },  [
    length, numberAllowed, charAllowed, passwordGenerator
  ]);

  return (
    <>
      <div className="w-full max-w-md mt-15 mx-auto  shadow-md rounded-lg px-4 py-8 text-orange-500 bg-gray-700">
        <h1 className="flex justify-center gap-2 text-bold pb-5">PassoWord Genrator</h1>
        <div className="flex shadow bg-white rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className="outline-none  w-full py-1 px-2" placeholder="Password" readOnly  ref={passwordRef}/>
          <button onClick={copyPassToClipboard} className="outline-none bg-blue-700 text-white px-5   shrink-0">Copy</button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" 
            min={6}
            max ={100}
            className='cursor-pointer'
            onChange  = { (e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>


          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
            defaultChecked = {numberAllowed}
            id = "numberInput"
            onChange = {
              () => {
                setNumberAllowed((prev) => !prev);
              }
            }
            />
            <label>Numbers</label>
          </div>



          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
            defaultChecked = {charAllowed}
            id = "charInput"
            onChange = {
              () => {
                setCharAllowed((prev) => !prev);
              }
            }
            />
            <label>characters</label>
          </div>


          

        </div>
      </div>
    </>
  )
}

export default App
