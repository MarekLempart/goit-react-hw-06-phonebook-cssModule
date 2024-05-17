// Filter.jsx
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors';
import css from './Filter.module.css';

// Składnik filtrujący do wyszukiwania kontaktów według nazwy.
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <>
      <label>
        Find contacts by name
        <br />
        <input
          className={css.inputContacts}
          onChange={event => dispatch(setFilter(event.target.value.trim()))}
          value={filter}
          type="text"
          name="filter"
        />
      </label>
    </>
  );
};

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   onChangeInput: PropTypes.func.isRequired,
// };
