import { useState } from 'react';
import { Input } from '@chakra-ui/react';

type Props = {
  placeholder: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CustomInput = ({ placeholder, value, handleChange }: Props) => {
  return (
    <div>
      <Input
        htmlSize={10}
        width="auto"
        value={value}
        placeholder={placeholder}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
      />
    </div>
  );
};

export default CustomInput;
