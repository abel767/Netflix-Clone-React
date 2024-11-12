import {useEffect,useState} from 'react';
import './home.css'  // css importing 
import Navbar from '../../components/Navbar/Navbar' // navbar component importing
import hero_video2 from '../../assets/hero_video2.mp4'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/Play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Titlecards from '../../components/TitleCards/Titlecards'
import Footer from '../../components/Footer/Footer';

export default function Home() {
  const [showParagraph,setShowParagraph]  = useState(true)
  
   useEffect (()=>{
    const timer = setTimeout(()=>{
      setShowParagraph(false)
    },3000)

    return()=> clearTimeout(timer)
  },[])


    
  return (
    <div className='home'>
    <Navbar/>
    <div className="hero">
    <video autoPlay loop muted className='bannerVideo'>
          <source src={hero_video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
       <div className="hero-caption">
        <img src={hero_title} alt=""  className="captionImg"/>
        {showParagraph && (
              <p>
                In this intense historical drama series, a Viking chieften navigates politics, family and warefare in the dark Ages
              </p>
        )}
        <div className="heroBtns">
          <button className='btn'>
            <img src={play_icon} alt="" /> 
            <strong>Play</strong>
          </button>
          <button className='btn darkBtn'>
            <img src={info_icon} alt="" /> 
            <strong>More Info</strong>
          </button>
        </div>
        <Titlecards title="Popular on Netflix" category={'upcoming'}/>
       </div>
    </div>
    <div className="moreCards">
    <Titlecards title={'Your next Watch'} category={'top_rated'}/>
    <Titlecards title={'Crowd Pleasers'} category={'popular'}/>
    <Titlecards title={"Today's Top Picks for You"} category={'now_playing'}/>
    <Titlecards title={"New on Netflix"} category={'upcoming'}/>
    </div>
    <Footer/>
    </div>
  )
}
