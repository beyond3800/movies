import React, { useContext, useRef, useState } from 'react'
import Each from './Each'
import { MoviesContext } from '../../context/context'
import { Link } from 'react-router-dom'
import { file } from '../../data'
import EachTrending from '../top_rated/EachTrending'

const PopularMovies = () => {
  const mainBodyRef = useRef(null)
  const scrollRef = useRef(null)
  const trendingRef = useRef(null)
  const [select, setSelect] = useState('streaming')
  const linksRef = useRef(null)

    const {popular} = useContext(MoviesContext)
    const handleLinks = (e) =>{
      const allLink = [...linksRef.current.children]
      setSelect(e.currentTarget.title)
      e.currentTarget.classList.add('select')
      allLink.forEach(each=>{
        if(each.classList.contains('select')){
            each.classList.remove('select')
            e.currentTarget.classList.add('select')
            each.children[1].classList.remove('hidden')
        }
        if(!each.classList.contains('select')){
          each.classList.toggle('hidden')
          each.children[1].classList.add('hidden')
        }
      })

    }
    const handleSelect = (e) =>{
      linksRef.current.classList.toggle('hidden')
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
    <div className=' relative'>
        <div className='pt-3 fade-scroll' ref={mainBodyRef}>
            <div className="font-sans flex l-space mb-7 pl-6">
                <div className="mr-2 text-2xl font-mono font-">what's Popular</div>
                <div className="border text-center text-lg rounded-2xl fbg w-auto border-t-0 font-mono absolute left-56 capitalize l-space">
                    {/* <div className="" onClick={(e)=>handleLinks(e)}>{select}</div> */}
                    <div className=" " ref={linksRef}>
                        <div className="select px-4" onClick={(e)=>handleLinks(e)} title='streaming'> 
                          <span>Streaming</span>
                          <i className='fas fa-chevron-down text-sm ml-3 '></i>  
                        </div>
                        <div className="hidden px-4" onClick={(e)=>handleLinks(e)} title='on Tv'>
                          <span>on tv</span>
                          <i className='fas fa-chevron-down text-sm ml-3 hidden'></i>
                        </div>
                        <div className="hidden px-4" onClick={(e)=>handleLinks(e)} title='for Rent'>
                           <span>for rent</span>
                           <i className='fas fa-chevron-down text-sm ml-3 hidden'></i>
                        </div>
                        <div className="hidden px-4" onClick={(e)=>handleLinks(e)} title='In theater'> 
                          <span>in theaters</span>
                          <i className='fas fa-chevron-down text-sm ml-3 hidden'></i>
                        </div>
                    </div>

                </div>
            </div>
            <div className=" pb-4 overflow-auto strollbar flex" ref={scrollRef} onScroll={(e)=>handleScroll(e)}>
                {file.map((each)=><EachTrending key={each.id}/>)}
            </div>
        </div>
    </div>
  )
}

export default PopularMovies