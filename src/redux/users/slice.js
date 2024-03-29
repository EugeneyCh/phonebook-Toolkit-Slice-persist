import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'phonebook',
  // Початковий стан редюсера слайсу
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
  // Об'єкт редюсерів
  reducers: {
    addContact(state, action) {
      return { ...state, contacts: [...state.contacts, action.payload] };
    },
    deleteContact(state, action) {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    },
    updateFilter(state, action) {
      return { ...state, filter: action.payload };
    },
  },
});

const persistConfig = {
  key: 'phonebook',
  storage,
};

// Генератори екшенів
export const { addContact, deleteContact, updateFilter } =
  contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
