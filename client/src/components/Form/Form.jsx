import style from './Form.module.css'
import { useState } from 'react'
import { validation } from './validation'



function Form({Login}) {

    const[userData,setUserData]=useState({
        email:'',
        password:''
    })

    const [error,setError]=useState({})


    const handleChange=(event)=>{

        const property=event.target.name
        const value=event.target.value

        setUserData({...userData,[property]:value})
        const validationErrors=validation(userData)
        setError(validationErrors)

    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        Login(userData)
    }

    console.log(userData)
    console.log(error)




    return (
        <div className={style.contenedor}>


            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.contenedorInput}>
                    <label className={style.label}>Email:</label>
                    <input name='email' type='text'  className={style.input} value={userData.email} onChange={handleChange} />
                </div>

                <div className={style.contenedorInput}>
                    <label className={style.label}>Password:</label>
                    <input name='password' type='text' className={style.input} value={userData.password} onChange={handleChange} />
                    <input type='submit' value={'LOGIN'} className={style.button}/>
                </div>
            </form>
        </div>
    )
}

export default Form

