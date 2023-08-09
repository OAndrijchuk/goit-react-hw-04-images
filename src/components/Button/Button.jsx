import React, { useContext } from 'react';
import { LoadeMoreBtn } from './Button.styled';
import { GlobalContext } from 'store/ContextProvider';

export const Button = () => {
  const { setPage } = useContext(GlobalContext);
  return (
    <LoadeMoreBtn type="button" onClick={() => setPage(prev => prev + 1)}>
      Load More
    </LoadeMoreBtn>
  );
};
