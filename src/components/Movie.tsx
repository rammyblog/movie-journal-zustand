import { Box, Button, Flex, Select, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import useStore, { Movie } from '../store';
import CustomInput from './CustomInput';

type Props = {
  movie: Movie;
};

const SingleMovie = ({ movie }: Props) => {
  const [showEditForm, setShowEditFrom] = useState(false);
  const [editMovieTitle, setEditMovieTitle] = useState(movie.title);
  const [ratings, setRatings] = useState(movie.rating);
  const { updateMovie } = useStore((state) => state);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditMovieTitle(event.target.value);
  };

  const handleEditMovie = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateMovie(movie.id, editMovieTitle, ratings);
    setShowEditFrom(false);
  };

  return (
    <>
      <Box borderBottom={'1px'}>
        <Text fontSize={'xl'} fontWeight="bold">
          {movie.title}
        </Text>
        <Box>
          Your rating: <Text as={'span'}>{movie.rating}</Text>
        </Box>
        {!showEditForm && (
          <Box py={'5'}>
            <Button
              onClick={(
                event: React.MouseEvent<HTMLButtonElement, MouseEvent>
              ) => setShowEditFrom(true)}
              colorScheme="purple"
              mr={'4'}
            >
              Edit
            </Button>
            <Button colorScheme={'red'}>Delete</Button>
          </Box>
        )}
        {showEditForm && (
          <form onSubmit={handleEditMovie}>
            <Flex
              //   wrap={'wrap'}
              width={'100%'}
              //   justifyContent={['space-between', 'space-between', 'left']}
            >
              <CustomInput
                value={editMovieTitle}
                placeholder={editMovieTitle}
                handleChange={handleChange}
              />
              <Select
                value={ratings}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setRatings(parseInt(e.target.value, 10))
                }
                placeholder="Select Rating"
                width={['30%', '16%', '15%']}
                mx="4"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Select>
              <Button type="submit">Submit</Button>
            </Flex>
            <Box py={'5'}>
              <Button
                onClick={(
                  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
                ) => setShowEditFrom(false)}
                colorScheme="purple"
                mr={'4'}
              >
                Cancel
              </Button>
              <Button colorScheme={'red'}>Delete</Button>
            </Box>
          </form>
        )}
      </Box>
    </>
  );
};

export default SingleMovie;
