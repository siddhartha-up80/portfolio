import React from 'react'
import heinz from "../Images/heinz.gif"
const Inator = () => {
  return (
    <div className="w-full bg-gray-800 text-white"><div className="flex flex-col items-center justify-center">

            
    <p className="text-4xl mx-4 my-4 sm:text-5xl text-white" >{"( inators )=>"} I make "inators", without self distruct button </p>
    <div className="text-white my-8 rounded-2xl mx-auto w-2/4 md:h-80 md:w-80 md:mx-8 sm:w-80 sm:mx-8">
      <img src={heinz} className="rounded-2xl mx-auto h-full w-full" alt="inators"/>
    </div>
  </div></div>
  )
}

export default Inator