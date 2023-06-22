import React from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = ({ movies }) => {
  return (
    <ul className={classes['movies-list']}>
      {movies.map((movie) => (
        <Movie
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
