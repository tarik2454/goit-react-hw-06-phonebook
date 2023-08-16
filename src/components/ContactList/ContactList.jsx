import PropTypes from 'prop-types';

import {
  StyledContactList,
  StyledItem,
  StyledButton,
} from './ContactList.styled';

export const ContactList = ({ contacts, onDeletContact }) => {
  return (
    <StyledContactList>
      {contacts.map(({ id, name, number }, index) => (
        <StyledItem key={id}>
          <span>
            {index + 1}. {name}:
          </span>
          <span>{number}</span>
          <StyledButton
            onClick={() => {
              onDeletContact(id);
            }}
          >
            Delete
          </StyledButton>
        </StyledItem>
      ))}
    </StyledContactList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,

  onDeletContact: PropTypes.func.isRequired,
};
