import React from 'react'
import { useGlobalContext } from '../../context'
import { NavLink } from 'react-router-dom'



const Movies = () => {

  const { movies,isLoading } = useGlobalContext()


  if(isLoading){
    return(
      <div className='movie-section'>

        <div className='loading'>Loading..</div>
      </div>
    )
  }


  return (
    <>
      <section className='movies-page'>
        <div className='container  grid grid-4-col'>

          {
            movies.map((curmovies) => {
              const { imdbID, Title, Poster } = curmovies
              const moviesName= Title.substring(0,15);
              return (
                <NavLink to={`movies/${imdbID}`} key={imdbID}>
                  <div className='card'>
                    <div className="card-info">
                      <h2>{moviesName.length >= 15 ? `${moviesName} ... `: moviesName}</h2>
                      <img src={Poster} alt={imdbID} />
                    </div>
                  </div>
                </NavLink>
              )
            })}
        </div>
      </section>
    </>
  )
}

export default Movies