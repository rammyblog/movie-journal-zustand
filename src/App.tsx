import { Center } from '@chakra-ui/react';
import CustomInput from './components/CustomInput';
import Title from './components/Title';
import useInput from './hooks/useInput';

function App() {
  const [search, handleChange] = useInput('');
  return (
    <Center>
      <Title text="Movie Journal" color="#F56565" />
      <CustomInput
        placeholder="search"
        handleChange={handleChange}
        value={search}
      />
    </Center>
  );
}

export default App;
