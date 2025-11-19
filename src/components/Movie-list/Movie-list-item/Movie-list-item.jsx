import './movie-listitem.css';

function MovieListItem ({ name, views, onDelete, onToggleProp, favorite, like }) { 
    return (
        <li className={` list-group-item d-flex justify-content-between ${favorite && 'fovorite'} ${like && 'like'}`} >
            <span onClick={onToggleProp} className='list-group-item-label' data-toggle='like'>{name}</span>
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
    )
}

export default MovieListItem;