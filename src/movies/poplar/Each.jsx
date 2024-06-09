import React from 'react'

const Each = (props) => {
    const {title,poster_path,backdrop_path,vote_average,release_date,id} = props.data
    const show = `show/${id}`
    // console.log(props.data)
  return (
    <div className=''>
      <div className="">
        <div className="h-60 w-56 bg-slate-200 ml-10 border border-blue-400 rounded">
          <a href={show}>
            <img src="" alt="" />
          {/* <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="" className=' w-full h-full'/> */}
          </a>
        </div>
        <div className=" rate w-10 h-10 bg-blue-400 rounded-full relative bottom-9 left-60 text-center flex justify-center items-center">{vote_average}</div>
        <div className=" -mt-6 pl-16 pb-7 capitalize">
          <div className="">{title}</div>
          <div className="">{release_date}</div>
        </div>
      </div>

    </div>
  )
}

export default Each