import React from 'react'
import heinz from "../Images/heinz.gif"
const Inator = () => {
  return (
    <div className="w-full bg-rose-900 text-white flex  justify-center"><div className="sm:ml-16 flex flex-col items-center justify-center">

            
    <p className="text-3xl mx-4 my-4 sm:text-4xl text-white" >{"( inators )=>"} <br className="sm:hidden"/> I make "inators", without self distruct button </p>
    <div className="text-white my-8 rounded-2xl mx-auto w-2/4 md:h-80 md:w-80 md:mx-8 sm:w-80 sm:mx-8">
      <img src={heinz} className="rounded-2xl mx-auto h-full w-full" alt="inators"/>
    </div>
  </div></div>
  )
}

export default Inator