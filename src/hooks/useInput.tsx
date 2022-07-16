import React, { useState } from 'react';

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return [value, handleChange] as const;
};

export default useInput;
