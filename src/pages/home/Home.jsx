import { useEffect, useState } from 'react'
import './Home.css'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Home() {

  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
      .then(res => res.json())
      .then(data => setPopularMovies(data.results))
  },[])

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {
            popularMovies.map(movie => (
              <span>{movie.original_title}</span>
            ))
          }
        </Carousel>
      </div>
    </>
  )
}

export default Home