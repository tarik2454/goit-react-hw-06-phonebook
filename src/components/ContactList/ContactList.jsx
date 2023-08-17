import {
  StyledContactList,
  StyledItem,
  StyledButton,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { selectContacts, selectFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <StyledContactList>
      {filteredContacts.map(({ id, name, number }, index) => (
        <StyledItem key={id}>
          <span>
            {index + 1}. {name}:
          </span>
          <span>{number}</span>
          <StyledButton
            onClick={() => {
              handleDeleteContact(id);
            }}
          >
            Delete
          </StyledButton>
        </StyledItem>
      ))}
    </StyledContactList>
  );
};
