import React from 'react'

function Search() {
  return (
    <div className='relative'>
    <div className='w-4 mt-0 absolute top-3 left-3'>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#D0D1D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.9998 21L15.7998 15.8" stroke="#D0D1D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </div>
      <input type='text' className='w-full  rounded-md h-10  mt-3 pl-10'/>


    </div>
  )
}

export default Search