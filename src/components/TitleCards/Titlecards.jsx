import { useRef, useEffect, useState} from 'react';
import './titlecards.css';
import cards_data from '../../assets/cards/Cards_data';
import { Link } from 'react-router-dom';
export default function Titlecards({title, category}) {
  const cardListRef = useRef(null);
  const [apiData, setApiData] = useState([])

  const scrollLeft = () => {
    if (cardListRef.current) {
      cardListRef.current.scrollBy({
        left: -300, // Scroll left by 300 pixels
        behavior: 'smooth' // Smooth scrolling
      });
    }
  };

  const scrollRight = () => {
    if (cardListRef.current) {
      cardListRef.current.scrollBy({
        left: 300, // Scroll right by 300 pixels
        behavior: 'smooth' // Smooth scrolling
      });
    }
  };

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDFiM2Y2NDkxYTliMDVmMTAyMTgyNzRjODFkZTRkOCIsIm5iZiI6MTczMTMzMzc5Mi44Nzg3MTEsInN1YiI6IjY3MzIwZDg4YjZhMmE5ZjE0YTJiODY5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.25yaRJF0DbtPkpq41GE4iyqOOMJ-BiEXrIFps5GPC-c'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));
  },[category])



  return (
    <div className='titleCards'>
      <br />
      <br />
      <br />
      <h2>{title}</h2>
      <button className="scroll-button left" onClick={scrollLeft}>❮</button>
      <button className="scroll-button right" onClick={scrollRight}>❯</button>
      <div className="card-list" ref={cardListRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt={card.name} />
              {/* <p>{card.name}</p> */}
            </Link>
          );
        })}
      </div>
    </div>
  );
}