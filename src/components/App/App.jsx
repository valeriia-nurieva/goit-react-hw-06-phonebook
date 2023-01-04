import { useState } from 'react';
import { nanoid } from 'nanoid';
import useLocalStorage from 'hooks/useLocalStorage';
import Form from '../Form';
import ContactList from '../ContactList';
import Filter from '../Filter';
import Layout from '../Layout';
import GlobalStyle from '../GlobalStyle';
import Title from './App.styled';

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(prevContacts => [newContact, ...prevContacts ])
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
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