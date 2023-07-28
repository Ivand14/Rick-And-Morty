import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'

import axios from 'axios'
import styles from './Register.module.css'

const Register = () => {
    const[form,setForm] = useState({
        email:'',
        password:''
    })
    const [error,setError] = useState('')
    const navigate = useNavigate()

    const handleChange = (event) =>{
        const value = event.target.value
        const property = event.target.name
        setForm({...form,[property]:value})
    }
    
    const handleSubmit = (event) =>{
        event.preventDefault()
        axios.post('http://localhost:3001/rickandmorty/register',form)
        .then(response =>{
            console.log(response.data)
            navigate('/login')
        })
        .catch(error=>{
            setError(error?.response?.data?.error || 'El email ya existe')
        })
    }

    console.log(error)
    
    return (
        <div className={styles.contenedor}>
            <div className={styles.contenedorTitle}>
                <h2 className={styles.title}>BIENVENIDO A LA APP DE RICK AND MORTY</h2>
                <h3 className={styles.title}>REGISTRATE PARA INICIAR</h3>
            </div>
            <form onSubmit={handleSubmit} className={styles.contenedorForm}>
            
                <label htmlFor='email' className={styles.label}>Email</label>
                <input type='email' id='email' name='email' value={form.email} onChange={handleChange} required className={styles.input}></input>
                {error && <p className={styles.textError}>{error}</p>}
                
                <label htmlFor='password' className={styles.label}>Password</label>
                <input type='password' name='password' value={form.password} onChange={handleChange} required className={styles.input}></input>
                
                <button type='submit' className={styles.button}>REGISTRARSE</button>
                <p className={styles.text}>Ya tenes una cuenta? <Link to='/login' className={styles.link}>Iniciar sesion</Link></p>
            </form>
        </div>
    )
}

export default Register
