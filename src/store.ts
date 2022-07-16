import create from 'zustand';

// Standard interface and functions
export interface Movie {
  id: number;
  title: string;
  rating: number;
}

// const updateTodo = (todos: Todo[], id: number, text: string): Todo[] =>
//   todos.map((todo) => ({
//     ...todo,
//     text: todo.id === id ? text : todo.text,
//   }));

// const toggleTodo = (todos: Todo[], id: number): Todo[] =>
//   todos.map((todo) => ({
//     ...todo,
//     done: todo.id === id ? !todo.done : todo.done,
//   }));

// const removeTodo = (todos: Todo[], id: number): Todo[] =>
//   todos.filter((todo) => todo.id !== id);

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
  //   updateTodo: (id: number, title: string) => void;
  //   toggleTodo: (id: number) => void;
  //   removeTodo: (id: number) => void;
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
  })
);

export default useStore;
