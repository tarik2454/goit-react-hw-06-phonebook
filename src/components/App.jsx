import React from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { StyledMain, StyledContainer, StyledSection } from 'styles/GlobalStyle';
import { StyledTitle, StyledWrapper, StyledSmollTitle } from './App.styled';

export const App = () => {
  return (
    <StyledMain>
      <StyledSection>
        <StyledContainer>
          <StyledWrapper>
            <StyledTitle>PhoneBook</StyledTitle>
            <ContactForm />
            <Filter />
            <StyledSmollTitle>Contacts</StyledSmollTitle>
            <ContactList />
          </StyledWrapper>
        </StyledContainer>
      </StyledSection>
    </StyledMain>
  );
};
