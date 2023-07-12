import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import Card from '../Card/Card'
import {useDispatch} from 'react-redux'
import {removeFav,filterCards,orderCards} from '../../redux/actions/action';
import style from './Favorites.module.css'

function Favorites() {
    const dispatch=useDispatch()
    const favorites=useSelector(state=>state.myFavorites)
    const [aux,setAux]=useState(false)

    const onClose=(id)=>{
        dispatch(removeFav(id))
    }

    const handleOrder=(e)=>{
        dispatch(orderCards(e.target.value))
        setAux(!aux)
    }

    const handleFilter=(e)=>{
        dispatch(filterCards(e.target.value))
    }

    return (
        <div className={style.contenedorGeneral}>
            <div className={style.contenedorFav}>
                <select onChange={handleOrder}>

                    <option value='A'>ASCENDENTE</option>
                    <option value='D'>DESCENDENTE</option>

                </select>

                <select onChange={handleFilter}>

                    <option value='All'>ALL</option>

                    <option value='Male'>MALE</option>

                    <option value='Female'>FEMALE</option>

                    <option value='Genderless'>GENDERLES</option>

                    <option value='unknown'>UNKNOW</option>

                </select>
            </div>
        <div className={style.contenedor}>
        {favorites.map((fav)=>(
            <div className={style.cards}>
                <Card
                    id={fav.id}
                    key={fav.id}
                    name={fav.name}
                    image={fav.image}
                    onClose={onClose}
                />
            </div>
        ))}
        </div>
        </div>
    )
}

export default Favorites