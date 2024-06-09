import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

const Show = () => {
    const {movieId} = useParams()
    const [details,setDetails] = useState([])
    const [movie,setMovie] = useState([])
    const screenRef = useRef(null)

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZWNjZjhlMzE5MDA0MzI3ZDZjNTE0MDQ0ZjE3NzIxMSIsInN1YiI6IjY1MWRiZmNjYzUwYWQyMDBhZDgyZDk3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p8mJQt2eX2S4WXellnQEoaxQYgAMoM5B3aHkO9oToTA'
            }
          };
          // https://api.themoviedb.org/3/movie/937249
        //  https://api.themoviedb.org/3/movie/951491?language=en-US
        // https://api.themoviedb.org/3/movie/{movie_id}/videos
        // https://api.themoviedb.org/3/movie/{movie_id}/account_states
        // `https://api.themoviedb.org/3/movie/${movieId}/credits`
        // https://api.themoviedb.org/3/movie/${movieId}/watch/providers
        // https://api.themoviedb.org/3/movie/${movieId}
    },[movieId])
    const one = 1
    if(one){
    console.log(screenRef)
    }
    // screenRef.current.classList.add()
  return (
    <div className=' mt-9'>
      <div className="">
        <div className=" w-full bg-orange-500 h-big grid grid-cols-3">
          <div className=" w-96 h-96" ref={screenRef}>
            <img src="/public/img/011.jpg" alt="" className=' w-full h-full rounded-lg'/>
          </div>
          <div className=" text-white"></div>
          <div className=" h-big">
            <img src="/public/img/011.jpg" alt="" className=' w-full h-full'/>
          </div>
        </div>
        <div className=" flex w-56 justify-around capitalize text-lg pl-5">
          <h1 className=' bg-orange-100 p-1 rounded-lg'>action</h1>
          <h1 className='bg-red-100 p-1 rounded-lg'>love</h1>
          <h1 className='bg-blue-100 p-1 rounded-lg'>crime</h1>
        </div>
      </div>
    </div>
  )
}

export default Show