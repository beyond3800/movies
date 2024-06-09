import React, { useState } from 'react'
import { useRef } from 'react'
import { useContextProvider } from '../../context/context'

const EachTrailer = (props) => {
    const{ nav, handleModal } =props
    const { bodyRef,modalDiv,setModal} = useContextProvider()
    const eachVideoDiv = useRef(null)

    const openModal=(e)=>{
      document.querySelector('body').classList.add('unscroll')
        if(e.currentTarget.id=='play'){
            nav()
            setModal(true)
            // handleModal()
        }
    }
  return (
    <div className="eachvideo w-80 mr-5">
    <div className=" w-80 h-52 rounded-lg bg-slate-50 flex justify-center">
        <button className='' onClick={(e)=>openModal(e)} id='play'><i className='fa fa-play text-3xl'></i></button>
    </div>
    <div className=" text-center mt-1">the gods killer</div>
</div>
  )
}

export default EachTrailer