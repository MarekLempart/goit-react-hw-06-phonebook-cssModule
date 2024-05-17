// ContactForm.jsx

// import PropTypes from 'prop-types';
// import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addContact } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/selectors';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  // // funkcja aktualizująca stan nazwy i numeru
  // const onChangeInput = evt => {
  //   const { name, value } = evt.currentTarget;
  //   name === 'name' ? setName(value) : setNumber(value);
  // };
  const handleSubmit = event => {
    event.preventDefault();
    const contact = {
      id: nanoid(),
      name: event.currentTarget.elements.name.value,
      number: event.currentTarget.elements.number.value,
    };
    const isExist = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isExist) {
      return toast.warn(`${contact.name} is already in contacts`);
    }

    dispatch(addContact(contact));
    event.currentTarget.reset();
  };

  return (
    <form className={css.formstyle} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <br />
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+((['\s\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <br />
      <label className={css.label}>
        Number
        <br />
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="^\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){0,13}\d$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <br />
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

//   return (
//     <>
//       <form
//         className={css.formstyle}
//         onSubmit={evt => {
//           evt.preventDefault();
//           addContact({ name, number });
//           setName('');
//           setNumber('');
//         }}
//       >
//         <label className={css.label}>
//           Name
//           <br />
//           <input
//             className={css.input}
//             onChange={onChangeInput}
//             value={name}
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+((['\s\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </label>
//         <br />
//         <label htmlFor="">
//           Number
//           <br />
//           <input
//             className={css.input}
//             onChange={onChangeInput}
//             value={number}
//             type="tel"
//             name="number"
//             pattern="^\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){0,13}\d$"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </label>
//         <br />
//         <button className={css.button} type="submit">
//           Add contact
//         </button>
//       </form>
//     </>
//   );
// };

// ContactForm.propTypes = {
//   addContact: PropTypes.func.isRequired,
// };
