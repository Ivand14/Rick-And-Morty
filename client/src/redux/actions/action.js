import axios from 'axios'

export const FILTER='FILTER'
export const REMOVE_FAV = 'REMOVE_FAV'
export const ADD_FAV = 'ADD_FAV'
export const ORDER_CARDS='ORDER_CARDS'
export const ALL='ALL'


export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    
        return async (dispatch) => {
        try {
            const response = await axios.post(endpoint, character);
            const { data } = response;
    
            return dispatch({
            type: ADD_FAV,
            payload: data,
            });
        } catch (error) {
            // Manejo de errores
            console.error(error);
        }
        };
};


export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    
    return async (dispatch) => {
        const response = await axios.delete(endpoint)
        const {data} = response 
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
        })
    };
};

export const filterCards=(gender)=>{
    return{
        type:FILTER,
        payload:gender
    }
}

export const orderCards=(order)=>{
    return{
        type:ORDER_CARDS,
        payload:order
    }
}
