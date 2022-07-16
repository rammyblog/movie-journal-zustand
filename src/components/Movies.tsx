import React from 'react';
import useStore from '../store';

type Props = {};

export default function Movies({}: Props) {
  const movies = useStore((state) => state.movies);

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
}
