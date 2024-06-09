import React, { useRef } from 'react'

const Top = () => {
  return (
    <div className="top">
      <div className="welcome pl-6 pt-10 pb-20" >
        <div className="pr-5 text-white mb-6">          
          <h1 className=' text-5xl mb-3'>Welcome.</h1>
          <p>Millions of movies,TV show and Popular actors. Explore now</p>
        </div>
        <div className=" w-full">
          <input type="text" name="" id="" placeholder='Search...' className=' py-3 rounded-s-full w-9/12 pl-6 border-white'/>
          <button className=' bg-green-500 py-3 w-3/12 rounded-full relative -left-8'> Search</button>
        </div>
      </div>
      <div className=" oscar pl-6 pt-8 pb-10 text-white mb-10">
        <h1 className=' text-7xl mb-9 uppercase'>Oscars</h1>
        <a href="" className='py-3 px-4 rounded-full border-2 font-bold'>View the winners <i className=' fas fa-arrow-right'></i></a>
      </div>
    </div>
  )
}
export default Top