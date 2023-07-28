import {Link} from 'react-router-dom'
import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import style from './Nav.module.css'

function Nav({onHandleSearch}) {

  const handleLogout = () =>{
    window.history.replaceState(null,'','/login')
  }

  return (
      <div className={style.contenedor}>
          <div className={style.contenedorButton}>
            <Link to={'/home'}>
              <button className={style.button}>HOME</button>
            </Link>
            <Link to={'/about'}>
              <button className={style.button}>ABOUT</button>
            </Link>
            <Link to={'/favorites'}>
              <button className={style.button}>FAVORITES</button>
            </Link>
          </div>
          <SearchBar onSearch={onHandleSearch}/>
          <Link to={'/login'}>
              <button className={style.button} onClick={handleLogout}>LOG OUT</button>
          </Link>
    </div>
  )
}

export default Nav