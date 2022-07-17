import useStore from '../store';
import SingleMovie from './Movie';

type Props = {};

export default function Movies({}: Props) {
  const movies = useStore((state) => state.movies);

  return (
    <div>
      {movies.map((movie) => (
        <SingleMovie movie={movie} key={movie.id} />
      ))}
    </div>
  );
}
