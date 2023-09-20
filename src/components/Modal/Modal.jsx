import React from 'react'
import { BlueNumber, ConditionTextWrapper, LinkBtn, ModalBackground, ModalButtn,  ModalCloseBtn, ModalConditionText, ModalContainer, ModalContentContainer, ModalFlexWrapper, ModalImg, ModalMainText, ModalText, ModalTitle, ModalTitleBlue, Text } from './Modal.styled'
import {IoMdClose} from 'react-icons/io'


const Modal = ({
  closeModal,
  model,
  make,
  year,
  rentalPrice,
  address,
  rentalCompany,
  functionalities,
  id,
  type,
  img,
  description,
  accessories,
  rentalConditions,
  mileage
}) => {
  const addressParts = address.split(', ');
  const city = addressParts[1];
  const country = addressParts[2];
  const rentalConditionsSplitted = rentalConditions.split('\n', 3);
  const firstElement = rentalConditionsSplitted[0];
  const match = firstElement.match(/\d+/);
  const number = parseInt(match[0], 10);



  return ( <ModalBackground>
      <ModalContainer>
        <ModalImg src={img} alt={make} />
      <ModalCloseBtn onClick={() => closeModal(false) }><IoMdClose/></ModalCloseBtn>
        <ModalTitle>{make} <ModalTitleBlue>{model}</ModalTitleBlue>, {year}</ModalTitle>
          
      <ModalFlexWrapper>
      <ModalContentContainer>
          <ModalText>
          <Text>
              {city} | {country} | {rentalCompany} 
            </Text>
            <Text>
              {type} | {model} | {id} | {accessories[2]}
            </Text>
      </ModalText>
          <ModalMainText>
          {description}
      </ModalMainText>
      </ModalContentContainer>
      
      <ModalContentContainer>
      <ModalMainText>Accessories and functionalities:</ModalMainText>
          <ModalText>
            <Text>
            {accessories[0]} | {accessories[1]} | {accessories[2]}
            </Text>
            <Text>
            {functionalities[0]} | {functionalities[1]} | {functionalities[2]}
            </Text>
      </ModalText>
      </ModalContentContainer>

      <ModalContentContainer>
          <ModalMainText>Rental Condition</ModalMainText>
          <ConditionTextWrapper>
          <ModalConditionText>
          Minimum age : <BlueNumber>{number}</BlueNumber>
          </ModalConditionText>
          <ModalConditionText>
          {rentalConditionsSplitted[1]}
          </ModalConditionText>
          </ConditionTextWrapper>
          
          <ConditionTextWrapper>
          <ModalConditionText>
          {rentalConditionsSplitted[2]}
          </ModalConditionText>
          <ModalConditionText>
          Mileage: <BlueNumber>{mileage.toLocaleString('en-EN')}</BlueNumber>
            </ModalConditionText>
            <ModalConditionText>
                Price: <BlueNumber>{rentalPrice}</BlueNumber>
          </ModalConditionText>
          </ConditionTextWrapper>
      </ModalContentContainer>
      

      
      </ModalFlexWrapper>
      
      <ModalButtn>
      <LinkBtn to="/contact">Rental car</LinkBtn>
      </ModalButtn>
    </ModalContainer>
    </ModalBackground>
    
  )
}

export default Modal

