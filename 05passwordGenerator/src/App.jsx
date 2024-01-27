import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [allowedNumber, setAllowedNumber] = useState(false)
  const [allowedChar, setAllowedChar] = useState(false)
  const [password, setPassword] = useState('')
  const passwordRef = useRef(null)


  const passwordGenerator =  useCallback(()=>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdegfhijklmnopqrstuvwxyz'

    if (allowedNumber) str += '1234567890'
    if (allowedChar) str += '!@#$%^&*(){}'

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char)

      
    }

    setPassword(pass)

  }, [length, allowedNumber, allowedChar, setPassword])

  const copyClipbord = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,1000)
    window.navigator.clipboard.writeText(password)
  })



  useEffect(()=>{passwordGenerator()},
  [length,passwordGenerator,allowedChar,allowedNumber])

  return (
    <>
      
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className='className="flex shadow rounded-lg overflow-hidden mb-4"'>
          <input type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly 
            ref={passwordRef}/>
            

            <button onClick={copyClipbord} className= 'outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>

        <div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input type="range"
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setlength(e.target.value)}} />
              <label htmlFor="length"> Length : {length}</label>
                </div>
              <div className="flex items-center gap-x-1">
                <input type="checkbox"
                defaultChecked = {allowedNumber}
                id='numbAllowed'
                onChange={()=>{
                  setAllowedNumber((prev)=> !prev)
                }} />
                <label htmlFor="number">Number</label>
              </div>
              <div className="flex items-center gap-x-1">
                <input type="checkbox"
                defaultChecked = {allowedChar}
                id='characterAllowed'
                onChange={()=>{
                  setAllowedChar((prev)=>!prev)
                }} />
                <label htmlFor="character">Character</label>
              </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
