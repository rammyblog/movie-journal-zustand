import { Container, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import AddMovie from './components/AddMovie';
import CustomInput from './components/CustomInput';
import Movies from './components/Movies';
import Title from './components/Title';
import useInput from './hooks/useInput';
import useStore from './store';

function App() {
  const [search, setSearch] = useState('');
  const { setMovies, searchMovie } = useStore((state) => state);
  useEffect(() => {
    setMovies();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    searchMovie(event.target.value);
    setSearch(event.target.value);
  };

  return (
    <Container>
      <Flex
        flexDirection={'column'}
        justifyContent="center"
        alignItems={'center'}
      >
        <Title text="Movie Journal" color="#F56565" />
        <CustomInput
          placeholder="search"
          handleChange={handleSearchChange}
          value={search}
        />
        <AddMovie />
      </Flex>
      <Movies search={search} />
    </Container>
  );
}

export default App;
