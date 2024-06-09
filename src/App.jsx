import {React,Component, useRef, useState} from "react";
import './style.css'
import Movies from "./movies/Movies";
import { MoviesProvider } from "./context/context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Show from "./movies/show/Show";
import Footer from "./components/Footer";
import PopularMain from "./movies/poplar/PopularMain";
import { VideoModal } from "./movies/modal/VideoModal";

const App = () => {
  const [showNav,setShowNav] = useState(true)
  const bodyRef = useRef(null)
  const handleNav=()=>{
    setShowNav(prev=>!prev)
  }
  const handleModal = ()=>{
    setShowNav(prev=>!prev)
    // bodyRef.current.classList.toggle('unscroll')
  }
    return(
      <div className="" ref={bodyRef}>
         <MoviesProvider >
          <Router>
            {!showNav&&<VideoModal  handleModal={handleModal}/>}
           <Navbar />
            <Routes>
              <Route path="/" element={<Movies nav={handleNav} handleModal={handleModal}/>} />
              <Route path="/popular" element={<PopularMain />} />
              <Route path="/show/:movieId" element={<Show/>} />
            </Routes>
          <Footer />
          </Router>
        </MoviesProvider>
      </div>
       

      
    )
}
export default App