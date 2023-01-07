import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactsItem: [],
    filter: '',
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    addContacts(state, action) {
      state.contactsItem.push(action.payload);
    },
    removeContacts(state, action) {
      state.items = state.contactsItem.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { setFilter, addContacts, removeContacts } = contactsSlice.actions;
