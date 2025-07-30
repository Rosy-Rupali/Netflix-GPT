import React from 'react'
import { lang } from '../utils/languages'
import { useSelector } from 'react-redux'

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.language)
  return (
    <div className='flex justify-center pt-[15%]'>
      <form className='flex bg-black w-1/2 text-white justify-between p-4'>
        <input className='p-4 w-[71%] rounded-lg gap-x-4' type='text' placeholder={lang[langKey].getTheSearchPlaceholder}/>
        <button className='bg-red-700 font-bold rounded-lg p-2 w-1/4'>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GPTSearchBar