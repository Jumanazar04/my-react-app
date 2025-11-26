import { useContext, useState } from 'react';
import './Search.css'
import { AppContext } from '../../Context/context';

function Search() {
    const [term, setTerm] = useState('');
    const {stat, dispatch} = useContext(AppContext);

    function onUpdateTerm(e){
        setTerm(e.target.value.toLowerCase());
        dispatch({type: 'ON_TERM', payload: term})
    }

    return (
        <div className="search">
            <form className='mb-3'>
                <input 
                    type="text" 
                    onChange={onUpdateTerm} 
                    value={term} 
                    className="p-3 form-control search-input" 
                    placeholder="Kinolarni qidirish..." 
                />  
            </form>

            {btnsArray.map((btn) => {
                return (
                    <button 
                        type='button' 
                        className={`btn  ${stat.filter === btn.name ? 'btn-dark' : 'btn-outline-dark'}`}
                        key={btn.name}
                        onClick={() => dispatch({type: 'ON_FILTER', payload: btn.name})}
                    >
                        {btn.label}
                    </button>
                );
            })}
        </div>
    );
}

const btnsArray = [
    {name: 'all', label: 'Barcha kinolar'},
    {name: 'favorite', label: 'Sevimli kinolar'},
    {name: 'mostViewed', label: "Eng ko'p ko'rilgan videolar"},
];

export default Search;
