import React from 'react'
import { lang } from '../utils/languageConst'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
   // @ts-ignore
   const langKey = useSelector((store) => store.config.lang)
   return (
      <div className="pt-[10%] flex justify-center">
         <form className="w-1/2 bg-opacity-50 bg-black grid grid-cols-12 rounded-md">
            <input
               type="text"
               className=" bg-opacity-50 p-4 m-4  col-span-10 rounded-lg focus:outline-none "
               placeholder={lang[langKey].gptPlaceholder}
            />
            <button className="bg-orange-500 hover:bg-orange-700 hover:scale-95 text-white font-bold m-4 py-2 px-4 rounded-md col-span-2">
               {lang[langKey].Search}
            </button>
         </form>
      </div>
   )
}

export default GptSearchBar
