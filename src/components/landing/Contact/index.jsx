import React from 'react';
import { Container } from 'components/common';
import contact from 'assets/illustrations/contact.svg';
import laptop from 'assets/illustrations/laptop.svg';
import { Wrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={laptop} alt="" />
    </Thumbnail>
  </Wrapper>
);
