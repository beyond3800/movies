import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { file } from '../../data';
import EachTrending from './EachTrending';

const TopRatedSub = () => {

  const thisWeekRef = useRef(null);
  const todayRef = useRef(null);
  const scrollRef = useRef(null)
  const mainBodyRef = useRef(null)
  const [trend,setTrend] = useState(true)
  const handleTrending = (e) => {
    if(e.currentTarget.title == 'today'){
      todayRef.current.classList.add('select')
      setTrend(true)
      if(todayRef.current.classList.contains('select')){
        thisWeekRef.current.classList.toggle('hide')
        thisWeekRef.current.classList.remove('select')
      }
    }
    else if(e.currentTarget.title == 'thisWeek'){
      thisWeekRef.current.classList.add('select')
      setTrend(false)
      if(thisWeekRef.current.classList.contains('select')){
        todayRef.current.classList.toggle('hide')
        todayRef.current.classList.remove('select')
      }
    }
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
      <div className=" fade-scroll" ref={mainBodyRef}>
        <div className="rounded my-4 font-sans flex">
          <Link to='/' className='mr-3 ml-4 text-2xl font-mono l-space'><h1>Trending</h1></Link>
          <div className="border text-center rounded-2xl fbg w-auto border-t-0 text-lg font-mono absolute left-36">
            <div className=" px-4 select" ref={todayRef} title='today' onClick={(e)=>handleTrending(e)} >
              <div className="">
                <span className='mr-2'>Today</span>
                {trend&&<i className='fas fa-chevron-down text-sm'></i>}
              </div>
            </div>
            <div className="px-4 hide" ref={thisWeekRef} onClick={(e)=>handleTrending(e)} title='thisWeek'> 
              <div className="">
                <span className='mr-2'>This week</span>
                {!trend&&<i className='fas fa-chevron-down text-sm'></i> }
              </div>
            </div>
          </div>
        </div>
        <div className=" flex overflow-x-auto strollbar pb-5" ref={scrollRef} onScroll={(e)=>handleScroll(e)}>
          {file.map(each=><EachTrending data={each} key={each.id}/>)}
        </div>
      </div>
    </div>
  )
}

export default TopRatedSub
