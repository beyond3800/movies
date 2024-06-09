import React, { useRef } from 'react'
import PopularMovies from './poplar/PopularMovies'
import Top from './Top'
import TopRatedSub from './top_rated/TopRatedSub'
import LatestTrailer from './latestTrail/LatestTrailer'
import { useContextProvider } from '../context/context'
import { VideoModal } from './modal/VideoModal'

const Movies = (props) => {
  const { nav, handleModal} = props
  const { bodyRef,modal } = useContextProvider()
  return (
    <div className="">
      <div className=' md:px-24 lg:px-36' ref={bodyRef}>
        <div className=" "><Top/></div>
        <div className=""><TopRatedSub /></div>
        <div className=""><LatestTrailer nav={nav} handleModal={handleModal}/></div>
        <div className=" "><PopularMovies/></div>
      </div>
      {
      // <div className=" absolute h-screen bg-red-700" ><VideoModal nav={nav} handleModal={handleModal}/></div>
      }
      
    </div>

  )
}

export default Movies