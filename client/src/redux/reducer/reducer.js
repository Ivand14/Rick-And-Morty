import { ADD_FAV, REMOVE_FAV, FILTER, ORDER_CARDS } from '../actions/action';


const initialState={
    myFavorites:[],
    allCharacters:[]
}

export const rootReducer = (state=initialState,action)=>{
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites:[...state.myFavorites,action.payload],
                allCharacters:[...state.allCharacters,action.payload]
                
            }
        case REMOVE_FAV:
            return{
                ...state,
                myFavorites: state.myFavorites.filter(fav=> fav.id !== action.payload),
                allCharacters:state.allCharacters.filter(fav=> fav.id !== action.payload)
            }
        case FILTER:
            // eslint-disable-next-line eqeqeq
            if(action.payload==='All'){
                return{
                    ...state,
                    myFavorites:state.allCharacters
                } 
            }else{
                return{
                    ...state,
                    myFavorites:state.allCharacters.filter((filtrado)=>filtrado.gender === action.payload)
                }
            }
        case ORDER_CARDS:
            const order =[...state.allCharacters]

            if (action.payload === 'A') {
                order.sort((a,b)=> a.id - b.id)
            }else if(action.payload === 'D'){
                order.sort((a,b)=> b.id - a.id)
            }

            return{
                ...state,
                myFavorites:order
            }

        default:
            return state
    }
}