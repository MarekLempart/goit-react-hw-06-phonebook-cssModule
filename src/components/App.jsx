// App.jsx

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { resetContacts } from '../redux/contactsSlice';
import css from './App.module.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ResetButton } from './ResetButton/ResetButton';

// Dodaj import funkcji getContacts z pliku selectors.js
import { getContacts } from '../redux/selectors';

export const App = () => {
  const [changesMade, setChangesMade] = useState(false);

  // Dodaj useSelector do pobierania kontaktów
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetContacts());
    setChangesMade(false); // Resetuje flagę informującą o zmianach
  };

  const handleChanges = () => {
    setChangesMade(true); // Ustawia flagę informującą o zmianach
  };

  return (
    <section className={css.section}>
      <h1 className={css.mainHeader}>Phonebook</h1>
      <ContactForm onChanges={handleChanges} />
      <h2 className={css.secondaryHeader}>Contacts</h2>
      <Filter />
      {/* Dodaj przekazanie funkcji handleChanges do komponentu ContactList */}
      <ContactList onChanges={handleChanges} />
      {/* Renderuje przycisk tylko gdy wystąpiły zmiany */}
      {changesMade && <ResetButton onReset={handleReset} />}
      <ToastContainer position="top-center" />
    </section>
  );
};
