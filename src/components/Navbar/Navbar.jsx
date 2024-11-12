import './navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile from '../../assets/profile_img.png'
import dropDown from '../../assets/caret_icon.svg'
import { useEffect, useRef } from 'react'
import { logout} from '../../firebase'

export default function Navbar() {
  const navRef = useRef()

  
  useEffect(()=>{
   window.addEventListener('scroll',()=>{
    if(window.scrollY >= 80){
      navRef.current.classList.add('nav-dark')
    }else{
      navRef.current.classList.remove('nav-dark')
    }
   })
  },[])

  return (
  
    <div  ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Browse by Languages</li>
      </ul>
      </div>
      
      <div className="navbar-right">
        <img src={search_icon} alt="" className='icons'/>
        <p>Children</p>
        <img src={bell_icon} alt="" className='icons'/>
        <div className="navbar-profile">
          <img src={profile} alt="" className='profile'/>
          <img src={dropDown} alt="" />
          <div className='dropDown'>
              <ul>
                <li>
                  <img src={profile} alt="" /> 
                  <span><p>{}</p></span>
                  <a href='#'>Manage Profile</a>
                  <a href='#'>Transfrt Profile</a>
                  <a href='#'>Account</a>
                  <a href='#'>Help Center</a>
                  <hr  className="lineBreak"/>
                  <a href="" onClick={()=>{logout()}}>Sign out of Netflix</a>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
