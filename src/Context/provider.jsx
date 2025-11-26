import { useReducer } from "react";
import { AppContext } from "./context";
import { v4 as uuidv4 } from 'uuid';


const initialValue = {
    data: [],
    term: '',
    filter: 'all',
};

const reducer = (stat = initialValue, action) => {
    const {type, payload} = action;
    switch(type){
        case 'ON_DELETE': 
            return {
                ...stat,
                data: stat.data.filter(item => item.id !== payload)    
            };
        case 'GET_DATA':
            return {
                ...stat,
                data: payload,
            };
        case 'ON_TOGGLE_PROP':
            return {...stat, data: stat.data.map((item) => {
                 if(item.id === payload.id){
                    return {...item, [payload.prop]: !item[payload.prop]}
                }
                return item
            })};
        case 'ADD_FORM':
            return {
                ...stat,
                data: [
                    ...stat.data,
                    {
                        id: uuidv4(),
                        name: payload.name,
                        views: payload.views,
                        fovorite: false,
                        like: false,
                    },
                ],
            };
        case 'ON_TERM':
			return { ...stat, term: payload }
		case 'ON_FILTER':
			return { ...stat, filter: payload }
		
    default: 
        return stat;

    }
}

const AppProvider = ({children}) => {
    const [stat, dispatch] = useReducer(reducer, initialValue);
    return (
        <AppContext.Provider value={{stat, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;