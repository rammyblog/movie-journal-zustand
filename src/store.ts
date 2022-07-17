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
): Movie[] =>
  movies.map((movie) => ({
    ...movie,
    title: movie.id === id ? title : movie.title,
    rating: movie.id === id ? rating : movie.rating,
  }));

// const toggleTodo = (todos: Todo[], id: number): Todo[] =>
//   todos.map((todo) => ({
//     ...todo,
//     done: todo.id === id ? !todo.done : todo.done,
//   }));

const removeMovie = (movies: Movie[], id: number): Movie[] =>
  movies.filter((movie) => movie.id !== id);

const addMovieAction = (
  movies: Movie[],
  title: string,
  rating: number
): Movie[] => [
  ...movies,
  {
    id: Math.max(0, Math.max(...movies.map(({ id }) => id))) + 1,
    title,
    rating,
  },
];

// Zustand implementation
type Store = {
  movies: Movie[];
  setMovies: (movies: Movie[]) => void;
  addMovie: (title: string, rating: number) => void;
  updateMovie: (id: number, title: string, rating: number) => void;
  //   toggleTodo: (id: number) => void;
  removeMovie: (id: number) => void;
  //   setNewTodo: (newTodo: string) => void;
};

const useStore = create<Store>(
  (set): Store => ({
    movies: [],
    // Set movies from localstorage
    setMovies: (movies: Movie[]) =>
      set((state) => ({
        ...state,
        movies,
      })),
    addMovie: (title: string, rating: number) => {
      set((state) => ({
        ...state,
        movies: addMovieAction(state.movies, title, rating),
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
  })
);

export default useStore;
