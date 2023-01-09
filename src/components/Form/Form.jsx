import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { nanoid } from 'nanoid';
import { getContacts } from 'redux/selectors';
import { addContacts } from 'redux/contactsSlice';
import { FormStyled, FormLabel, FormInput, Button } from './Form.styled';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        throw new Error('Unexpected type of field');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.find(contact => contact.name === name)) {
      return toast.error(`${name} is already in contacts.`);
    } else {
      dispatch(
        addContacts({
          id: nanoid(),
          name: name,
          number: number,
        })
      );
      reset();
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <FormInput
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </FormLabel>
      <FormLabel>
        Number
        <FormInput
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </FormLabel>
      <Button type="submit">Add contact</Button>
      <Toaster />
    </FormStyled>
  );
};

export default Form;
