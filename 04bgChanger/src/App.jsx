import { useState } from 'react'



function App() {

const [color, setColor] = useState("olive") // remember useState hooks use for chainging UI 

  

  return (
    <>
    <div className=' w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-centre bottom-12 inset-x-0 px-2'>
   <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"
   style={{backgroundColor : 'white'}}>
   <button onClick={()=> setColor('red')} type="button"
  className="rounded-full px-4 py-1 text-sm font-semibold text-white shadow-lg"
     style={{backgroundColor : 'red'}}  >Red
   </button>
   <button onClick={()=>setColor('green')} type="button"
  className="rounded-full px-4 py-1 text-sm font-semibold text-white shadow-lg"
     style={{backgroundColor : 'green'}}  >green
   </button>
   <button type="button"
  className="rounded-full px-4 py-1 text-sm font-semibold text-white shadow-lg"
     style={{backgroundColor : 'blue'}}  >blue
   </button>
   <button type="button"
  className="rounded-full px-4 py-1 text-sm font-semibold text-white shadow-lg"
     style={{backgroundColor : 'olive'}}  >olive
   </button>
   <button type="button"
  className="rounded-full px-4 py-1 text-sm font-semibold text-white shadow-lg"
     style={{backgroundColor : 'grey'}}  >grey
   </button>
   <button type="button"
  className="rounded-full px-4 py-1 text-sm font-semibold text-white shadow-lg"
     style={{backgroundColor : 'yellow'}}  >yellow
   </button>
   <button type="button"
  className="rounded-full px-4 py-1 text-sm font-semibold text-white shadow-lg"
     style={{backgroundColor : 'pink'}}  >pink
   </button>
   <button type="button"
  className="rounded-full px-4 py-1 text-sm font-semibold text-white shadow-lg"
     style={{backgroundColor : 'purple'}}  >purple
   </button>
   <button type="button"
  className="rounded-full px-4 py-1 text-sm font-semibold text-black shadow-lg"
     style={{backgroundColor : 'lavender'}}  >lavender
   </button>
   <button type="button"
  className="rounded-full px-4 py-1 text-sm font-semibold text-black shadow-lg"
     style={{backgroundColor : 'white'}}  >white
   </button>
   <button type="button"
  className="rounded-full px-4 py-1 text-sm font-semibold text-white shadow-lg"
     style={{backgroundColor : 'black'}}  >Black
   </button>

   </div>
   </div>
   </div>
    </>
  )
}

export default App
