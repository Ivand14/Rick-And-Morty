import { useState } from 'react';
import styles from './Search.module.css'

export default function SearchBar({onSearch}) {

   const[id,setId]=useState('')

   

   const handleChange=(event)=>{
      setId(event.target.value)
   }

   


   return (
      <div className={styles.contenedor}>
         <input type='search' className={styles.input} value={id} onChange={handleChange} />
         <button onClick={()=>onSearch(id)} className={styles.button}>AGREGAR</button>
         <button onClick={()=>onSearch(Math.floor(Math.random()*826))} className={styles.button}>RANDOM</button>
      </div>
   );
}
