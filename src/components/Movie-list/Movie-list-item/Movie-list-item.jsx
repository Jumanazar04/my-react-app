import { useContext } from 'react';
import { AppContext } from '../../../Context/context';
import './movie-listitem.css';

function MovieListItem ({ name, views, favorite, like, id }) { 

    const {_, dispatch} = useContext(AppContext);
    

    function onDelete (){
        dispatch({type:'ON_DELETE', payload: id})
        console.log(id);
    }

    const onToggleProp = e => {
		const payload = {
			id,
			prop: e.currentTarget.getAttribute('data-toggle'),
		}
		dispatch({ type: 'ON_TOGGLE_PROP', payload })
	}
    
    
    return (
        <>
        <li className={` list-group-item d-flex justify-content-between ${favorite && 'fovorite'} ${like && 'like'}`} >
            <span onClick={onToggleProp} className='list-group-item-label' data-toggle='like'>{name.length < 35 ? name : name.slice(0, 32) + '...'}</span>
            <input type="number" className='p-1 list-group-item-input' defaultValue={views} />
            <div className='d-flex justify-content-center align-items-center'>
                <button className='btn-cookie btn-sm' type='button' onClick={onToggleProp} data-toggle='favorite'>
                    <i className='fas fa-cookie'></i>
                </button>
                <button className='btn-trash btn-sm' onClick={onDelete} type='button'>
                    <i className='fas fa-trash'></i>
                </button>
                <button  className='btn-star btn-sm' type='button'>
                    <i className='fas fa-star'></i>
                </button>
            </div>
        </li>
        </>
    )
}

export default MovieListItem;