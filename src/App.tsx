import { Container, Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import AddMovie from './components/AddMovie';
import CustomInput from './components/CustomInput';
import Movies from './components/Movies';
import Title from './components/Title';
import useInput from './hooks/useInput';
import useStore from './store';

function App() {
  const [search, handleSearchChange] = useInput('');
  const setMovies = useStore((state) => state.setMovies);
  useEffect(() => {
    setMovies();
  }, []);

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
      <Movies />
    </Container>
  );
}

export default App;
