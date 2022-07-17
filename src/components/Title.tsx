import { Heading } from '@chakra-ui/react';

type Props = {
  text: string;
  color: string;
};

const Title = ({ text, color }: Props) => {
  return (
    <Heading
      textTransform="uppercase"
      fontSize={['2.5em', '4em']}
      fontWeight="100"
      as="h3"
      size={['lg']}
      color={color}
    >
      {text}
    </Heading>
  );
};

export default Title;
