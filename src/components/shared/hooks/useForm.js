import { useState, useCallback } from 'react';

export const useForm = ({ initialState, onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = useCallback(({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
    reset();
  };
  const reset = () => {
    setState({
      search: '',
    });
  };
  return { state, setState, handleChange, handleSubmit };
};
