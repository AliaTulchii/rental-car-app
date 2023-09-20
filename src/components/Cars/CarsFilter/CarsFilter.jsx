import React, { useEffect, useState } from "react";
import {
  ClearBtn,
  Cross,
  Form,
  Input,
  SearchBtn,
} from "./CarsFilter.styled";
import cross from '../../../images/icons8-cross-48.png'
import { toast } from "react-toastify";



const Filter = ({onSubmitCarsForm}) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (!search) onSubmitCarsForm(search);
  }, [onSubmitCarsForm, search]);

  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = search.toLowerCase().trim();

    onSubmitCarsForm(searchQuery);
    if (searchQuery === '') {
      toast.warning('Please enter something');
      return;
    }
  }

  const handleChange = e => {
    const searchQuery = e.target.value;
    if (!searchQuery) {
      onSubmitCarsForm(searchQuery);
    }
    setSearch(searchQuery);
  };

  const onClickClear = () => {
    setSearch('');
  };


  return (

    <Form onSubmit={handleSubmit}>
      <Input
        name="search"
        type="text"
        id="searchQuery"
        value={search}
        placeholder="Find your best car"
        onChange={handleChange}
      />

      <SearchBtn type="submit" search={search}>
        Search
      </SearchBtn>
      {search && (
        <ClearBtn type="button" onClick={onClickClear}>
          <Cross src={cross} alt="cross" />
        </ClearBtn>
      )}
    </Form>
    
  );
};

export default Filter;