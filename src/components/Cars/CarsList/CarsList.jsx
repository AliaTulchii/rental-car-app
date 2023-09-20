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
            // <ListItem key={car.id}>
            <CarsItem
              car={car}
              
                key={ idx}
                // model={car.model}
                // make={car.make}
                // year={car.year}
                // rentalPrice={car.rentalPrice}
                // isFavorite={car.isFavorite}
                // address={car.address}
                // rentalCompany={car.rentalCompany}
                // functionalities={car.functionalities}
                // id={car.id}
                // type={car.type}
                // img={car?.img}
                // fuelConsumption={car.fuelConsumption}
                // engineSize={car.engineSize}
                // description={car.description}
                // accessories={car.accessories}
                // rentalConditions={car.rentalConditions}
                // mileage={car.mileage}
              />
            // </ListItem>
          ))}
        </List>
      </CarsListContainer>
    </>
  );
}

export default CarsList

