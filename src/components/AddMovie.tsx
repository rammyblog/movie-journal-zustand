import { Button, Flex, Select } from '@chakra-ui/react';
import React, { useState } from 'react';
import useInput from '../hooks/useInput';
import useStore from '../store';
import CustomInput from './CustomInput';

interface Props {}

const AddMovie = (props: Props) => {
  const [movieTitle, setMovieTitle] = useState('');
  const [ratings, setRatings] = useState(1);
  const addMovie = useStore((state) => state.addMovie);

  const onSubmit = () => {
    addMovie(movieTitle, ratings);
  };

  return (
    <Flex>
      <CustomInput
        placeholder="Title"
        handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setMovieTitle(e.target.value)
        }
        value={movieTitle}
      />
      <Select
        value={ratings}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setRatings(parseInt(e.target.value, 10))
        }
        placeholder="Select Rating"
        width={'50%'}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </Select>
      <Button onClick={() => onSubmit()} disabled={!movieTitle} type="submit">
        Add
      </Button>
    </Flex>
  );
};

export default AddMovie;
