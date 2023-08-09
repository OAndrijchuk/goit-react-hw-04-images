import React, { useContext } from 'react';
import { Header, SearchBtn, SearchForm, SearchInput } from './Searchbar.styled';
import { GlobalContext } from 'store/ContextProvider';

export const Searchbar = () => {
  const { textSQ, setTextSQ, onSubmitt } = useContext(GlobalContext);

  return (
    <Header>
      <SearchForm onSubmit={onSubmitt}>
        <SearchBtn type="submit">Search</SearchBtn>
        <SearchInput
          type="text"
          placeholder="Search images and photos"
          name="textSQ"
          onChange={({ target: { value } }) => setTextSQ(value)}
          value={textSQ}
        />
      </SearchForm>
    </Header>
  );
};
