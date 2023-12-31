import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

const imageUrl = import.meta.env.VITE_IMG

const MovieCard = ({ movie, showLink = true }) => {
    return (
        <div className='movie-card'>
            <div className='movie-image'>
                <img src={imageUrl + movie.poster_path} alt={movie.title} />
                {showLink && <Link to={`/movie/${movie.id}`}>
                    <h3>Clique para ver mais</h3>
                </Link>}

            </div>
            <h2>{movie.title}</h2>
            <p>
                <FaStar /> {movie.vote_average}
            </p>
            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </div>
    )
}

export default MovieCard