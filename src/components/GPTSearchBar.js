import React from 'react'

const GPTSearchBar = () => {
  return (
    <div className='flex justify-center pt-[15%]'>
      <form className='flex bg-black w-1/2 text-white justify-between p-4'>
        <input className='p-4 w-[71%] rounded-lg gap-x-4' type='text' placeholder='What would you like to watch today...?'/>
        <button className='bg-red-700 font-bold rounded-lg p-2 w-1/4'>Search</button>
      </form>
    </div>
  )
}

export default GPTSearchBar