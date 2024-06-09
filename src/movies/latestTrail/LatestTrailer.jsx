import React, { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import { file } from '../../data'
import EachTrailer from './EachTrailer'
const LatestTrailer = (props) => {
    const {nav,handleModal} =props
    const [select,setSelect] = useState('popular')
    const showDivRef = useRef(null)
    const bgRef = useRef(null)
    const latestRef = useRef(null)
    const mainBodyRef = useRef(null)
    const scrollRef = useRef(null)
    const handleTrailers = async(e)=>{
        setSelect(e.currentTarget.title)
        showDivRef.current.classList.toggle('hidden')
    }
    useEffect(()=>{
        // bgRef.current.style.backgroundColor='purple'
    })
    const handleSelect =()=>{
        const allDiv = [...showDivRef.current.children]
        allDiv.forEach(each=> each.title==select?each.classList.add('hidden'):each.classList.remove('hidden'))
        showDivRef.current.classList.toggle('hidden')
    }
    const handleScroll =(e)=>{
        // console.log(e.target.getBoundingClientRect())
        if(scrollRef.current.scrollLeft === 0){
          mainBodyRef.current.classList.add('fade-scroll')
        }else{
          mainBodyRef.current.classList.remove('fade-scroll')
        }
        
        // .getBoundingClient()
      }
  return (
    <div className=" relative"ref={latestRef}>
        <div className='pt-3 bg-red-400 fade-scroll' ref={mainBodyRef}>
            <div className="font-sans flex l-space mb-7 pl-6">
                <div className="mr-3 text-2xl font-mono">Latest Trailer</div>
                <div className="border text-center rounded-2xl fbg w-auto border-t-0 text-lg font-mono absolute py-1 left-56 pl-4 pr-5 capitalize l-space">
                    <div className="selected" onClick={(e)=>handleSelect(e)}> 
                        <span>{select}</span> 
                        <i className='fas fa-chevron-down text-sm ml-3'>
                    </i></div>
                    <div className="hidden" ref={showDivRef}>
                        <div className="" onClick={(e)=>handleTrailers(e)} title='popular'>
                            <span>popular</span>
                        </div>
                        <div className="" onClick={(e)=>handleTrailers(e)} title='streaming'>
                            <span>streaming</span> 
                        </div>
                        <div className="" onClick={(e)=>handleTrailers(e)} title='on Tv'>
                            <span>on tv</span>
                        </div>
                        <div className="" onClick={(e)=>handleTrailers(e)} title='for Rent'> 
                            <span>for rent</span>
                        </div>
                        <div className="" onClick={(e)=>handleTrailers(e)} title='In theater'>
                            <span>in theaters</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className="videos pb-4 pl-7 overflow-auto strollbar flex" ref={scrollRef} onScroll={(e)=>handleScroll(e)}>
                {file.map((each)=><EachTrailer key={each.id} nav={nav} handleModal={handleModal}/>)}
            </div>
        </div>
        {/* <div className=" bg-white h-10 w-80  cloud relative -top-52 left-44 opacity-70"></div> */}
    </div>
  )
}

export default LatestTrailer