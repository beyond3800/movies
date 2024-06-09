import { createContext, useContext, useEffect, useRef, useState } from "react";
import axoisClient from "../axioClient";

export const MoviesContext = createContext({
     popular:[],
     page:Number,
})
export const MoviesProvider = (props) => {
    const [popular,setPopular] = useState([])
    const [page, setPage] = useState(1)
    const [movieId, setMovieId] = useState()
    const bodyRef = useRef(null)
    const modalDiv = useRef(null)
    const [modal,setModal]= useState(false)
    console.log(popular)
    useEffect(()=>{
        getData()
        // https://api.themoviedb.org/3/movie/937249
      //  https://api.themoviedb.org/3/movie/951491?language=en-US
  },[])
  const getData = async()=>{
    const res = await axoisClient.get(`popular?language=en-US&page=${page}`)
    console.log(res) 
  }
    const context = {
        popular,
        bodyRef,
        modalDiv,
        modal,
        setModal,
    }
    return(
        <MoviesContext.Provider value={context}>
            {props.children}
        </MoviesContext.Provider>)
}
export const useContextProvider=()=>useContext(MoviesContext)

