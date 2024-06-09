import React from 'react'

const Footer = () => {
  return (
    <div className=' relative'>
      <div className="bg-slate-800 py-4 pl-10 text-gray-400 capitalize footer">
        <div className="">
          <div className=" text-xl text-gray-300 font-bold">About website</div>
          <div className=" text-sm font-light ml-2">
            <div className="">Movie website</div>
            <div className=""> famous actor and people</div>
            <div className="">Latest movie trialer</div>
          </div>
        </div>
        <div className="mt-5">
          <div className="text-xl text-gray-300 font-bold">website details </div>
          <div className=" text-sm font-light ml-2">
            <div className="">api comsuption</div>
            <div className="">usage of react</div>
            <div className=""> tailwind css</div>
          </div>

        </div>
        <div className="mt-5">
          <div className="text-xl text-gray-300 font-bold">about developer </div>
          <div className="text-sm font-light ml-2">
            <div className=""> whatsApp: <span className=' font-bold'>09013302500</span></div>
            <div className="">github: <span></span></div>
            <div className="">contact: <span className='font-bold'>09013302500</span></div>
            <div className="">email: <span className=' font-bold'>opiso3800@gmail.com</span></div>
          </div>

        </div>
        <div className=" mt-10 text-xs font-light text-center text-slate-500">created by beyond</div>
      </div>
    </div>
  )
}

export default Footer