import useStore from '../store';
import SingleMovie from './Movie';

type Props = {
  search: string;
};

export default function Movies({ search }: Props) {
  const movies = useStore((state) => state.movies);
  const searchedMovies = useStore((state) => state.searchedMovies);

  return (
    <div>
      {movies &&
        !search &&
        movies.map((movie) => <SingleMovie movie={movie} key={movie.id} />)}
      {searchedMovies &&
        search &&
        searchedMovies.map((movie) => (
          <SingleMovie movie={movie} key={movie.id} />
        ))}
    </div>
  );
}
