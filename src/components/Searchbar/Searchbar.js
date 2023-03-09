import { memo } from 'react';
import propTypes from 'prop-types';
import { initialState } from './initialState';
import {
  Header,
  Button,
  Form,
  ButtonLabel,
  FormInput,
} from './Searchbar.styled';

import { useForm } from 'components/shared/hooks/useForm';

const Searchbar = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  // console.log('render form');

  const { search } = state;
  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <ButtonLabel />
        </Button>

        <FormInput
          onChange={handleChange}
          value={search}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          required
        />
      </Form>
    </Header>
  );
};

export default memo(Searchbar);

Searchbar.propTypes = {
  onSubmit: propTypes.func.isRequired,
};

// const [state, setState] = useState({ ...initialState });

// const handleChange = ({ target }) => {
//   const { name, value } = target;
//   setState(prevState => {
//     return { ...prevState, [name]: value };
//   });
// };
// const handleSubmit = e => {
//   e.preventDefault();
//   onSubmit({ ...state });
//   setState({ ...initialState });
//   reset();
// };

// const reset = () => {
//   setState({
//     search: '',
//   });
// };
