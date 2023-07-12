import React from 'react'
import style from './About.module.css'

function About() {
  const newLocal = '/rick_and_morty/src/img/FOTOCV.jpg'
  return (
    <div>
        <h1 className={style.Titulo}>Hola 👋 Soy Iván Dicesare</h1>
        <h2 className={style.subTitulo}>Bienvenido a mi aplicacion de Rick and Morty</h2>
    </div>
  )
}

export default About