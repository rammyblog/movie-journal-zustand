import create from 'zustand';

// Standard interface and functions
export interface Movie {
  id: number;
  title: string;
  rating: number;
}

const updateMovie = (
  movies: Movie[],
  id: number,
  title: string,
  rating: number
): Movie[] => {
  const updatedMovies = movies.map((movie) => ({
    ...movie,
    title: movie.id === id ? title : movie.title,
    rating: movie.id === id ? rating : movie.rating,
  }));
  localStorage.setItem('movie-journal', JSON.stringify(updatedMovies));
  return updatedMovies;
};

const searchMovie = (movies: Movie[], term: string): Movie[] => {
  return movies.filter((movie) =>
    movie.title.toLowerCase().includes(term.toLowerCase())
  );
};

const removeMovie = (movies: Movie[], id: number): Movie[] => {
  const updatedMovies = movies.filter((movie) => movie.id !== id);
  localStorage.setItem('movie-journal', JSON.stringify(updatedMovies));
  return updatedMovies;
};

const addMovie = (movies: Movie[], title: string, rating: number): Movie[] => {
  const updatedMovies = [
    ...movies,
    {
      id: Math.max(0, Math.max(...movies.map(({ id }) => id))) + 1,
      title,
      rating,
    },
  ];
  localStorage.setItem('movie-journal', JSON.stringify(updatedMovies));
  return updatedMovies;
};

const setMovies = (): Movie[] => {
  const movies = localStorage.getItem('movie-journal');
  return movies ? JSON.parse(movies) : [];
};

// Zustand implementation
type Store = {
  movies: Movie[];
  searchedMovies: Movie[];
  setMovies: () => void;
  addMovie: (title: string, rating: number) => void;
  updateMovie: (id: number, title: string, rating: number) => void;
  removeMovie: (id: number) => void;
  searchMovie: (term: string) => void;
};

const useStore = create<Store>(
  (set): Store => ({
    movies: [],
    searchedMovies: [],
    // Set movies from localstorage
    setMovies: () =>
      set((state) => ({
        ...state,
        movies: setMovies(),
      })),
    addMovie: (title: string, rating: number) => {
      set((state) => ({
        ...state,
        movies: addMovie(state.movies, title, rating),
      }));
    },
    updateMovie: (id: number, title: string, rating: number) => {
      set((state) => ({
        ...state,
        movies: updateMovie(state.movies, id, title, rating),
      }));
    },
    removeMovie: (id: number) => {
      set((state) => ({ ...state, movies: removeMovie(state.movies, id) }));
    },
    searchMovie: (term: string) => {
      set((state) => ({
        ...state,
        searchedMovies: searchMovie(state.movies, term),
      }));
    },
  })
);

export default useStore;
