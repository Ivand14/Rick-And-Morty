const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const passwordRegex = /^.{6,9}$/


export const validation=(userData)=>{
    const error={}

    if(!regexEmail.test(userData.email)) error.email='El usuario es invalido' 

    if(userData.email==='') error.email='El usuario esta vacío'

    if(userData.email.lenght > 35) error.email='Debe tener menos de 35 caracteres'

    if (!/\d/.test(userData.password)) error.password = 'La contraseña debe contener al menos un número';

    if(passwordRegex.test(userData.password)) error.password ='La constraseña debe tener entre 6 y 10 caracteres'

    return error
}