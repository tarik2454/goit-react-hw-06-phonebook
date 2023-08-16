import React, { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { StyledMain, StyledContainer, StyledSection } from 'styles/GlobalStyle';
import { StyledTitle, StyledWrapper, StyledSmollTitle } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  const handleAddContact = newContact => {
    const isContactExist = contacts.some(
      contact => contact.name === newContact.name
    );

    if (isContactExist) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      setContacts(prevContacts => [
        ...prevContacts,
        { ...newContact, id: nanoid() },
      ]);
    }
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const handleDeleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const getFilteredItems = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  const filteredContacts = getFilteredItems();

  return (
    <StyledMain>
      <StyledSection>
        <StyledContainer>
          <StyledWrapper>
            <StyledTitle>PhoneBook</StyledTitle>
            <ContactForm onAddContact={handleAddContact} />

            <Filter value={filter} onFilterChange={handleFilterChange} />

            <StyledSmollTitle>Contacts</StyledSmollTitle>
            <ContactList
              contacts={filteredContacts}
              onFilterChange={handleFilterChange}
              onDeletContact={handleDeleteContact}
            />
          </StyledWrapper>
        </StyledContainer>
      </StyledSection>
    </StyledMain>
  );
};
