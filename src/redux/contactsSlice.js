// contactsSlice.js

// Importowanie funkcji `createSlice` z biblioteki Redux Toolkit.
import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

// Początkowy stan aplikacji.
const initialState = {
  items: [
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ],
};

// Tworzenie slice'a dla kontaktów za pomocą funkcji `createSlice`.
const contactsSlice = createSlice({
  // Nazwa slice'a.
  name: 'contacts',
  // Początkowy stan.
  initialState,
  // Reducery dla slice'a, zawierający funkcje do dodawania i usuwania kontaktów.
  reducers: {
    // Reducer do dodawania kontaktu. Przyjmuje aktualny stan i akcję, która zawiera nowy kontakt.
    addContact: (state, action) => {
      state.items = [...state.items, action.payload]; // Dodawanie nowego kontaktu do listy kontaktów.
    },
    // Reducer do usuwania kontaktu. Przyjmuje aktualny stan i akcję, która zawiera id kontaktu do usunięcia.
    deleteContact: (state, action) => {
      // Usuwanie kontaktu z listy kontaktów na podstawie przekazanego id.
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    // Reducer do resetowania kontaktów. Przywraca początkowy stan kontaktów.
    resetContacts: state => {
      state.items = initialState.items;
    },
  },
});

// Eksportowanie akcji `addContact` i `deleteContact` z obiektu zawierającego akcje slice'a.
export const { addContact, deleteContact, resetContacts } =
  contactsSlice.actions;

// Eksportowanie reducer'a z slice'a, który będzie obsługiwał akcje związane z kontaktami.
export const contactsReducer = contactsSlice.reducer;
