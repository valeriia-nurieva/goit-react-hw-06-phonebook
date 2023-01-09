import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import { FilterTitle, FilterInput } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <FilterTitle>
      Find contacts by name
      <FilterInput type="text" value={filter} onChange={changeFilter} />
    </FilterTitle>
  );
};

export default Filter;
