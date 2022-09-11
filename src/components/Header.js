import React from 'react'
import Search from './Search'

function Header() {
  return (
    <div className='h-screen flex-1 flex flex-col'>
        <header className='h-18 flex  items-center border-gray-200 '>
         <div className='flex items-center justify-center  p-4 text-slate-800 font-bold'>
            Dashboard
        </div>

        <div className='flex items-center justify-center  p-4 text-gray-300 font-bold'>
            Advanced Quary
        </div>

        <div className='flex items-center justify-center p-4 text-gray-300 font-bold'>
            Events
        </div>
        <Search/>
        
        
        </header>

        <div className='flex'>esra</div>
        

      
    </div>
  )
}

export default Header