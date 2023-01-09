import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContacts } from 'redux/contactsSlice';
import { Button } from './ContactItem.styled';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const deleteContact = contactId => {
    dispatch(removeContacts(contactId));
  };

  return (
    <>
      <p>{name}</p>
      <p>{number}</p>
      <Button
        type="button"
        onClick={() => {
          deleteContact(id);
        }}
      >
        Delete
      </Button>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
