import React from 'react';
import { CarsListContainer, List } from './CarsList.styled';
import CarsItem from '../CarsItem/CarsItem';


const CarsList = ({cars, search}) => {
  
  const filterContactHandler = () => {
    const normalizedFilter = search.toLocaleLowerCase();
    if (!search) {
      return cars;
    }
    return cars.filter(car =>
      car.make.toLocaleLowerCase().includes(normalizedFilter)
    );
  };
  const filterCars = filterContactHandler();

  return (
    <>
      <CarsListContainer>
      <List>
          {filterCars.map((car,idx) => (
            <CarsItem
              car={car}
              
                key={ idx}
                
              />

          ))}
        </List>
      </CarsListContainer>
    </>
  );
}

export default CarsList

