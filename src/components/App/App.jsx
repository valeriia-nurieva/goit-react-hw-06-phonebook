import Form from '../Form';
import ContactList from '../ContactList';
import Filter from '../Filter';
import Layout from '../Layout';
import GlobalStyle from '../GlobalStyle';
import Title from './App.styled';

const App = () => {
  return (
    <Layout>
      <Title>Phonebook</Title>
      <Form />
      <Title as="h2">Contacts</Title>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </Layout>
  );
};

export default App;
