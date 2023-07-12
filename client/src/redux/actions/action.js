export const FILTER='FILTER'
export const REMOVE_FAV = 'REMOVE_FAV'
export const ADD_FAV = 'ADD_FAV'
export const ORDER_CARDS='ORDER_CARDS'
export const ALL='ALL'

export const addFav=(character)=>{
    return{
        type:ADD_FAV,
        payload:character
    }
}

export const removeFav=(id)=>{
    return{
        type:REMOVE_FAV,
        payload:parseInt(id)
    }
}

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
