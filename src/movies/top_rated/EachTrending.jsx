import React from 'react'
import { Link } from 'react-router-dom'

const EachTrending = () => {
  return (
    <Link href="show/2222" className='ml-10' onClick={()=>console.log(123456)}>
        <div className="h-60 w-48 bg-slate-200  border border-blue-400 rounded-md">
            <img src="/public\img\free-photo-of-the-treasury-behind-canyon-in-petra.jpeg" className='w-full h-full rounded-md' alt="" />
        </div>
        <div className="rate w-9 h-9 rounded-full bg-blue-400 relative -top-5 left-2 flex items-center justify-center">79</div>
        <div className=" px-2"> 
            <div className="name font-bold text-lg">The Road to another World</div>
            <div className="date font-light text-gray-400">Mar 24, 2024</div>
        </div>
    </Link>
  )
}

export default EachTrending