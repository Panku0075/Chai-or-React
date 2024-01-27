import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()-=_+[]{}|;:,.<>?';

    let pass = '';
    let validChars = lowercaseChars;

    if (includeUppercase) validChars += uppercaseChars;
    if (includeNumbers) validChars += numberChars;
    if (includeSpecialChars) validChars += specialChars;

    for (let i = 0; i <= passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length + 1);
      pass += validChars.charAt(randomIndex);
    }

    setPassword(pass);
  },[passwordLength,includeNumbers,includeUppercase,includeSpecialChars,setPassword]);

  const copyClipbord = ()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }

 useEffect(()=>{
  generatePassword()
 },[
  passwordLength,includeNumbers,includeSpecialChars,includeUppercase,generatePassword
 ])


  return (
    <>
     
  
    <div className="max-w-md mx-auto p-4 bg-gray-100 mt-8 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Password Generator</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Password Length:
        </label>
        <input
          type="text"
          value={password}
          className="w-full px-3 py-2 border rounded-md"
          placeholder='password'
          readOnly
          ref={passwordRef}        
          />

      <div>
        
          <div className='mb-2'>
            <label className='inline-flex items-center'>
            <input type="range"
            min={8}
            max={100}
            id='checker'
            value={passwordLength}
            className=' cursor-pointer'
            onChange={(e)=>{setPasswordLength(e.target.value)}} />
           <span className='ml-4'> Password Length : {passwordLength}</span>
            </label>
          </div>
        
      </div>

      </div>
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
            className="form-checkbox text-blue-500"
          />
          <span className="ml-2">Include Uppercase</span>
        </label>
      </div>
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
            className="form-checkbox text-blue-500"
          />
          <span className="ml-2">Include Numbers</span>
        </label>
      </div>
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={includeSpecialChars}
            onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
            className="form-checkbox text-blue-500"
          />
          <span className="ml-2">Include Special Characters</span>
        </label>
      </div>
      <button
        onClick={copyClipbord}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Copy
      </button>
     
    </div>
    </>
  )
}

export default App
