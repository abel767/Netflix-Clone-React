import './player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useEffect, useState } from 'react';
import { useNavigate , useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Player() {

  const {id} = useParams();
  // const navigate = useNavigate()
  
  const [apiData,setApiData] = useState({
    name:'',
    key: '',
    published_at:'',
    type: ''
    })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDFiM2Y2NDkxYTliMDVmMTAyMTgyNzRjODFkZTRkOCIsIm5iZiI6MTczMTMzMzc5Mi44Nzg3MTEsInN1YiI6IjY3MzIwZDg4YjZhMmE5ZjE0YTJiODY5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.25yaRJF0DbtPkpq41GE4iyqOOMJ-BiEXrIFps5GPC-c'
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[])
  

  return (
    <div className="player">
      <Link to={'/'}> <img src={back_arrow_icon} alt="Back"  /></Link>
        <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
     <div className="playerInfo">
      <p>{apiData.published_at.slice(0,10)}</p>
      <p>{apiData.name}</p>
      <p>{apiData.type}</p>
     </div>
    </div>
  )
}
