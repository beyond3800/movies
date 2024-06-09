import React from 'react'
import { useRef } from 'react';

const Navbar = () => {
    // const{setSearch} = useContext(MovieContext);
    const linkRef = useRef(null);
    const barRef = useRef(null);
    const canselBar = useRef(null);
    const movieUlRef = useRef(null);
    const searchRef = useRef(null);
    const showMovieRef = useRef(null);
    const showPeopleRef = useRef(null);
    const tvShowRef = useRef(null);
    const navRef = useRef(null)
    const handleLink = () =>{
        linkRef.current.classList.toggle('showNav')
    }
    const showSearch = () =>{
        searchRef.current.classList.toggle('hidden')
    }
    const showMovies = (e) =>{
        movieUlRef.current.classList.toggle('hidden')
    }
    const showSubDev = (e) =>{
        // console.log(e.target.title,e.currentTarget.title)
        if(e.target.title==='movies'){
            if(showMovieRef.current.classList.contains('hidden')){
                showMovieRef.current.classList.remove('hidden')
            }else{
                showMovieRef.current.classList.add('hidden')
            }
            
        }
        if(e.target.title==='people'){
            showPeopleRef.current.classList.toggle('hidden')
        }
        if(e.target.title==='tvShow'){
            tvShowRef.current.classList.toggle('hidden')
        }
    }
    const dropDown=(e)=>{
        console.log(e.currentTarget.title)
        if(e.nativeEvent.type=='mouseout'){
            if(e.currentTarget.title==='movies'){
                showMovieRef.current.classList.toggle('hidden')
                showPeopleRef.current.classList.add('hidden')
                tvShowRef.current.classList.add('hidden')
            }
            if(e.currentTarget.title==='people'){
                showPeopleRef.current.classList.toggle('hidden')
                showMovieRef.current.classList.add('hidden')
                tvShowRef.current.classList.add('hidden')
            }
            if(e.currentTarget.title==='tvShow'){
                tvShowRef.current.classList.toggle('hidden')
                showPeopleRef.current.classList.add('hidden')
                showMovieRef.current.classList.add('hidden')
            }
        }         

    }
    window.addEventListener('scroll',(e)=>{
        //  console.log(e.target.getBoundingClient())
        // console.log(window.pageYOffset)
        const { width,height } = navRef.current.getBoundingClientRect()
        console.log(height)
        if(window.pageYOffset > height+300){
            navRef.current.classList.add('fixedNav')
        }
        if( window.pageYOffset <= height +100){
            navRef.current.classList.remove('fixedNav')
        }
    })
  return (
    <nav className=' text-xl md:flex justify-around items-center font-mono blueDark' ref={navRef}>
        <div className="flex justify-around md:justify-between shadow-md md:shadow-none text-white">
            <button className='block md:hidden opacity-80' type="submit" onClick={()=>handleLink()} ref={barRef}>
                <span><i className='fas fa-bars'></i></span> 
            </button>
            {/* <button 
                className='block md:hidden'
                type="submit"
                onClick={()=>handleLink()}
                ref={canselBar}>
            <span><i className='fas fa-times'></i></span> 
            </button> */}
            <header className=' text-3xl font-light'>Movies</header>
            <button type="submit"className='md:hidden opacity-80' onClick={()=>showSearch()}>
                <i className='fas fa-search'></i>
            </button>
        </div>
        {/* <div className=" flex ml-20">
            <input
            type="text" 
            name="search" 
            id="search" 
            placeholder='Search movie title/actorss'
            className='hidden md:block border w-big rounded-s-lg bg-green-300'
            />
            <span>
                <button 
                type="submit"
                className='hidden md:block border h-12 py-2 px-3 hover:bg-green-400 rounded-e-lg'>
                    <i className='fas fa-search '></i>
                </button>
            </span>
        </div> */}
        <div className="flex md:hidden" ref={searchRef}> 
                <input 
                type="text" 
                name="" 
                id="" 
                className='border w-full pl-4 py-2 border-l-0 border-r-0 text-sm'
                placeholder='Search movie title/actorss'
                onChange={(e)=>setSearch(e.target.value)}/>       
        </div>
        <div className=" w-full absolute blueDark md:w-auto text-white md:bg-transparent showNav smooth shadow-lg md:shadow-none md:relative md:translate-y-0" ref={linkRef}>
            <ul className='block md:flex pl-10 py-3'>
                <li className='link mb-2'  title='movies' onMouseEnter={(e)=>dropDown(e)} onMouseLeave={(e)=>dropDown(e)}> 
                    <div className=" text-lg font-bold mr-5 cursor-pointer" title='movies' onClick={(e)=>showSubDev(e)}>Movies</div>
                    <ul className='dropDown hidden' ref={showMovieRef}>
                        <li className='mb-1 cursor-pointer'> Popular</li>
                        <li className='mb-1 cursor-pointer'>Top Rated</li>
                        <li className='mb-1 cursor-pointer'>On Tv</li>
                        <li className='mb-1 cursor-pointer'>Airing Today</li>
                    </ul> 
                </li>
                <li className='link mb-2 mr-5' title='tvShow' onMouseEnter={(e)=>dropDown(e)} onMouseLeave={(e)=>dropDown(e)}>
                    <div className="text-lg font-bold cursor-pointer" title='tvShow' onClick={(e)=>showSubDev(e)}>Tv/Shows</div>
                    <ul className='dropDown hidden' ref={tvShowRef}>
                        <li className='mb-1 cursor-pointer'>Top Rated</li>
                        <li className='mb-1 cursor-pointer'>Upcoming</li>
                        <li className='mb-1 cursor-pointer'>Now Playing</li>
                    </ul>
                </li>
                <li className='link' title='people' onMouseEnter={(e)=>dropDown(e)} onMouseLeave={(e)=>dropDown(e)}>
                    <div className="text-lg font-bold cursor-pointer" title='people' onClick={(e)=>showSubDev(e)}>People</div>
                    <ul className='dropDown hidden' ref={showPeopleRef}>
                        <li className='mb-1 cursor-pointer'> Popular People</li>
                    </ul>
                </li>
            </ul>
            <ul className=' hidden w-96 h-10 items-center justify-around'>
                <li onMouseLeave={(e)=>showMovies(e)} className=''>
                    <div className="hidden md:block mr-5" onMouseEnter={(e)=>showMovies(e)}> Movies <span></span></div>
                        <div className="">
                            <ul className='hidden bg-black text-white py-2 px-5 absolute ' ref={movieUlRef}>
                                <li className='link hover:text-black pl-1 hover:bg-white'> Latest movies </li>
                                <li className='link hover:text-black pl-1 hover:bg-white'> Nollyhood</li>
                                <li className='link hover:text-black pl-1 hover:bg-white'> China movies </li>
                                <li className='link hover:text-black pl-1 hover:bg-white'> Bollyhood movies </li>
                            </ul>
                        </div>
                </li>
                <li className='hidden'><a href="">About</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar