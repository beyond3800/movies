import React, { useRef, useState } from 'react'
import { useContextProvider } from '../../context/context'
import ReactPlayer from 'react-player'

export const VideoModal = (props) => {
    const { nav, handleModal} =props
    const { modalDiv,setModal,bodyRef } = useContextProvider()
    const [autoplay,setAutoplay] =useState(false)
    const videoRef = useRef(null)
    // console.log(props)
    const closeModal =(e)=>{
      document.querySelector('body').classList.remove('unscroll')
      videoRef.current.pause();
      videoRef.current.currentTime=0
      // bodyRef.current.classList.remove('modal-active') 
      // nav()
      setModal(false)
      handleModal()
      console.log(123)
    }
  return (
    <div className=" fixed h-full w-screen bg-transparent z-10  pl-2" ref={modalDiv}>
      <div className=" w-11/12 h-72 bg-black absolute top-96 rounded-t-lg">
        <div className="header flex text-white justify-between px-5"> 
            <div className="name"> name</div>
            <div className=" text-lg"><button onClick={(e)=>closeModal(e)}><i className='fas fa-times'></i></button></div>
        </div>
        <div className=" w-full h-full">
            {/* <ReactPlayer url='/public/vidoe/505.mp4'/> */}
            <video className=' w-full h-full pb-7' autoPlay={false} ref={videoRef} controls>
                <source src='/public/vidoe/505.mp4'/>
            </video>
            <div className="controls"></div>
        </div>
        <div className="bottom">
        </div>
      </div>
    </div>
  )
}
