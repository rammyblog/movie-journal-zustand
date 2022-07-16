import { Heading } from '@chakra-ui/react';

type Props = {
  text: string;
  color: string;
};

const Title = ({ text, color }: Props) => {
  return (
    <Heading
      textTransform="uppercase"
      fontSize="4em"
      fontWeight="100"
      as="h3"
      size="lg"
      color={color}
    >
      {text}
    </Heading>
  );
};

export default Title;

// text-transform: uppercase;
// font-size: 4em;
// font-weight: 100;/
