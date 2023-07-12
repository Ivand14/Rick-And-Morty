import React, { useEffect, useState } from 'react'

import style from './Detail.module.css'
import {useParams} from 'react-router-dom'

function Detail() {

  const [character,setCharacter]=useState({})
  const [origen,setOrigen]=useState({})
  const {id} = useParams()

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
        .then((response) => {
            if (!response.ok) {
              throw new Error("¡No hay personajes con ese ID!");
            }
            return response.json();
        })
        .then((data) => {
            if (data.name) {
              setCharacter(data);
              setOrigen(data.origin);
            } else {
              window.alert("¡No hay personajes con ese ID!");
            }
        })
        .catch((error) => {
            window.alert(error.message);
        });
  
      return () => {
        setCharacter({});
      };
  }, [id]);
  
  console.log(origen)
  return (
    <div key={character.id} className={style.contenedor}>
        <h2 className={style.Titulo}>{character.name}</h2>
        <div className={style.contenedorDatos}>
          <div className={style.contenedorImg}>
            <img src={character.image} alt={character.name} className={style.img}></img>
          </div>
          <div className={style.contenedorInfo}>
            <h3 className={style.texto}> STATUS | {character.status}</h3>
            <h3 className={style.texto}> SPECIE | {character.species}</h3>
            <h3 className={style.texto}> GENDER | {character.gender}</h3>
            <h3 className={style.texto}> ORIGIN | {origen.name}</h3>
          </div>
        </div>
    </div>
  )
}

export default Detail