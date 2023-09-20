import React from 'react'
import { Address, Comment, ContactButton, ContactForm, ContactFormBox, ContactLeftSide, ContactText, ContactTitle, ContactUsContainer, Input, InputBox, Strong, Textarea } from './ContactUsPage.styled'


const ContactUs = () => {



  return (
    <ContactUsContainer>
     
      <ContactLeftSide>
      <ContactTitle>Contact Us</ContactTitle>
          <ContactText>Get in touch if you haven't received an answer to your question</ContactText>
        <Address>
              <Strong>Email:</Strong>
              bestcarrenting@gmail.com
          </Address>
          <Address>
              <Strong>Phone:</Strong>
              +380 692 357 709
      </Address>
      <Comment>Our support team is always ready to help, but in most cases it's faster and easier to manage your booking online.</Comment>
        </ContactLeftSide>
        
        <ContactFormBox>
        <ContactForm>
            <InputBox>
            <Input
              id="name"
              name="name"
              placeholder="Name"
              type="text"
            />
            <Input
              id="email"
              name="email"
              placeholder="Email"
              type="email"
            />
            </InputBox>
            

            <Textarea
              id="message"
              name="message"
              placeholder="Write to us... "
              rows="5">
              
            </Textarea>
            

            <ContactButton type='submit'>
              Send message
            </ContactButton>
          </ContactForm>
        </ContactFormBox>
      
      
         
    </ContactUsContainer>
  )
}

export default ContactUs
