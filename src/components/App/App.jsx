import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { addContacts, setFilter, removeContacts } from 'redux/slice';
import Form from '../Form';
import ContactList from '../ContactList';
import Filter from '../Filter';
import Layout from '../Layout';
import GlobalStyle from '../GlobalStyle';
import Title from './App.styled';

const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const addContact = ({ name, number }) => {
    dispatch(
      addContacts({
        id: nanoid(),
        name: name,
        number: number,
      })
    );
  };

  const deleteContact = contactId => {
    dispatch(removeContacts(contactId));
  };

  const changeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  const getFilteredContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Layout>
      <Title>Phonebook</Title>
      <Form onSubmit={addContact} contacts={contacts} />
      <Title as="h2">Contacts</Title>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getFilteredContact()}
        onDeleteContact={deleteContact}
      />
      <GlobalStyle />
    </Layout>
  );
};

export default App;
