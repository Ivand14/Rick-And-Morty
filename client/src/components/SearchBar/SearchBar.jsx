import styles from './Search.module.css'
import { useState } from 'react';

export default function SearchBar({onSearch}) {

   const[id,setId]=useState('')

   const handleChange=(event)=>{
      setId(event.target.value)
   }

   const handleClick=()=>{
      onSearch(id)
      setId('')
   }

   return (
      <div className={styles.contenedor}>
         <input type='search' className={styles.input} value={id} onChange={handleChange} />
         <button onClick={handleClick} className={styles.button}>AGREGAR</button>
         <button onClick={()=>onSearch(Math.floor(Math.random()*826))} className={styles.button}>RANDOM</button>
      </div>
   );
}
