import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import ContactItem from 'components/ContactItem';
import { List, Item } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <List>
      {getFilteredContacts().map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <ContactItem name={name} id={id} number={number} />
          </Item>
        );
      })}
    </List>
  );
};

export default ContactList;