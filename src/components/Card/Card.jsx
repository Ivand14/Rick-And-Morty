import style from './Card.module.css'
import {Link} from 'react-router-dom'
import { addFav,removeFav} from '../../redux/actions/action';
import {useDispatch,useSelector} from 'react-redux'
import { useEffect,useState } from 'react';

export default function Card(props) {

   const myFavorites=useSelector(state=>state.myFavorites)
   const dispatch=useDispatch()
   const [isFav,setIsFav]=useState(false)

   
   
   const handleFavorite=()=>{
      if(isFav){
         setIsFav(false)
         dispatch(removeFav(props.id))
      }else{
         setIsFav(true)
         dispatch(addFav(props))
      }
   }

   useEffect(()=>{
      setIsFav(myFavorites.some((fav) => fav.id === props.id))
   },[myFavorites,props.id])

   console.log(myFavorites)

   return (
      <div key={props.id} className={style.contenedor}>
         <div className={style.textContainer}>
            <button onClick={()=>props.onClose(props.id)} className={style.boton}>X</button>
            <Link to={`/detail/${props.id}`}>
               <button className={style.button}>{props.name}</button>
            </Link>
            {
            isFav ? (
               <button onClick={handleFavorite} className={style.btnFav}>❤️</button>
            ) : (
               <button onClick={handleFavorite} className={style.btnFav}>🤍</button>
            )
            }     
         </div>
         <img src={props.image} alt={props.name} className={style.img} />
      </div>
   );
}
