// App.jsx

// import { nanoid } from 'nanoid';
// import { useEffect, useState } from 'react';
import css from './App.module.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ResetButton } from './ResetButton/ResetButton';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const CONTACTS = 'contacts';
// const initialContacts = [
//   { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
//   { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
//   { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
//   { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
// ];

export const App = () => {
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <>
          <Filter filter={filter} onChangeInput={onChangeInput} />
          <ContactList delContact={delContact} contacts={filterFu()} />
        </>
      ) : (
        <p>No contacts yet.</p>
      )}
      {hasChanged && <ResetButton onClick={handleResetLocalStorage} />}
    </div>
  );

  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(window.localStorage.getItem(CONTACTS)) ?? initialContacts
  // );
  // const [filter, setFilter] = useState('');
  // const [hasChanged, setHasChanged] = useState(false);

  // useEffect(() => {
  //   window.localStorage.setItem(CONTACTS, JSON.stringify(contacts));
  // }, [contacts]);

  // const onChangeInput = evt => {
  //   setFilter(evt.currentTarget.value);
  //   setHasChanged(true);
  // };

  // const addContact = ({ name, number }) => {
  //   if (
  //     contacts.some(
  //       value => value.name.toLocaleLowerCase() === name.toLocaleLowerCase()
  //     )
  //   ) {
  //     alert(`${name} is already in contacts`);
  //   } else {
  //     setContacts(old => [...old, { id: nanoid(), name, number }]);
  //     setHasChanged(true);
  //   }
  // };

  // const filterFu = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  // const delContact = id => {
  //   const filtered = contacts.filter(item => item.id !== id);
  //   setContacts(filtered);
  //   setHasChanged(true);
  // };

  // const handleResetLocalStorage = () => {
  //   localStorage.removeItem(CONTACTS);
  //   setContacts(initialContacts);
  //   setHasChanged(false);
  // };

  // return (
  //   <div className={css.container}>
  //     <h1>Phonebook</h1>
  //     <ContactForm addContact={addContact} />
  //     <h2>Contacts</h2>
  //     {contacts.length > 0 ? (
  //       <>
  //         <Filter filter={filter} onChangeInput={onChangeInput} />
  //         <ContactList delContact={delContact} contacts={filterFu()} />
  //       </>
  //     ) : (
  //       <p>No contacts yet.</p>
  //     )}
  //     {hasChanged && <ResetButton onClick={handleResetLocalStorage} />}
  //   </div>
  // );
};
