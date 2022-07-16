import { Flex } from '@chakra-ui/react';
import AddMovie from './components/AddMovie';
import CustomInput from './components/CustomInput';
import Movies from './components/Movies';
import Title from './components/Title';
import useInput from './hooks/useInput';

function App() {
  const [search, handleSearchChange] = useInput('');

  return (
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
      <Movies />
    </Flex>
  );
}

export default App;
