import { useContext, useState } from 'react';
import './movies-add-form.css';
import { AppContext } from '../../Context/context';

function MovieAddForm() {
  const {_, dispatch} = useContext(AppContext)
  const [state, setState] = useState({
    name: '',
    views: ''
  });

  function onValueChange(e) {
    const value = e.target.name === 'views'
      ? (e.target.value === '' ? '' : +e.target.value)
      : e.target.value;

    setState({
      ...state,
      [e.target.name]: value
    });
  }

  	const addFormHandler = e => {
		e.preventDefault()
		if (state.name === '' || state.views === '') return
		const data = { name: state.name, views: state.views }
		dispatch({ type: 'ADD_FORM', payload: data })
		setState({ name: '', views: '' })
	}


  const { name, views } = state;

  return (
    <div className='movie'>
      <h3>Yangi kino qo'shish</h3>
      <form
        className='add-form d-flex gap-3'
        onSubmit={addFormHandler}
      >
        <input
          type="text"
          value={name}
          onChange={onValueChange}
          className='form-control new-post-label'
          name='name'
          placeholder='Qanday kino...'
          required
        />

        <input
          type="number"
          name='views'
          value={views}
          onChange={onValueChange}
          className='form-control new-post-label'
          placeholder='Nechi marta ko‘rilgan...'
          required
        />

        <button className='btn btn-outline-dark' type='submit'>
          Qo'shish
        </button>
      </form>
    </div>
  );
}

export default MovieAddForm;
