import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Header, SearchBtn, SearchForm, SearchInput } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [textSQ, setTextSQ] = useState('');

  const hendleFormSubmit = e => {
    e.preventDefault();
    onSubmit(textSQ);
  };
  const hendleInputCheange = ({ target: { value } }) => {
    setTextSQ(value);
  };

  return (
    <Header>
      <SearchForm>
        <SearchBtn type="submit" onClick={hendleFormSubmit}>
          Search
        </SearchBtn>

        <SearchInput
          type="text"
          placeholder="Search images and photos"
          name="textSQ"
          onChange={hendleInputCheange}
          value={textSQ}
        />
      </SearchForm>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
