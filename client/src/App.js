import "./App.css";

import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import About from "./components/About/About";
import Cards from "./components/Cards/Cards.jsx";
import Detail from "./components/Detail/Detail";
import Favorites from './components/Favorites/Favorites'
import Form from "./components/Form/Form";
import Nav from "./components/Nav/Nav";
import axios from "axios";
import { removeFav } from "./redux/actions/action";
import {useDispatch} from 'react-redux'

function App() {
   const [characters, setCharacters] = useState([]);
   const dispatch=useDispatch()

   const onSearch = (id) => {
      fetch(`http://localhost:3001/rickandmorty/character/${id}`)
         .then((response) => {
            if (!response.ok) {
               throw new Error("¡No hay Personajes con ese id!");
            }
            return response.json();
         })
         .then((data) => {
            if (data.name) {
               const exist = characters.find(
                  (personaje) => personaje.id === data.id
               );
               console.log(data);
               if (exist) {
                  window.alert("¡El personaje ya está en la lista!");
               } else {
                  setCharacters((oldCharacters) => [...oldCharacters, data]);
               }
            } else {
               window.alert("¡No hay Personajes con ese id!");
            }
         })
         .catch((error) => {
            window.alert(error.message);
         });
   };
   

   const onClose = (id) => {
      const newId = parseInt(id);
      setCharacters((personajes) =>
         personajes.filter((personaje) => personaje.id !== newId)
      );
      dispatch(removeFav(id))
   };

   const location = useLocation();

   const [access, setAccess] = useState(false);

   const navigate = useNavigate();

   const Login=(userData)=> {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }

   useEffect(()=>{
      !access && navigate('/')
   },[access])


   return (
      <div className={location.pathname === "/" ? "contenedorLogin" : "contenedor"}>
         {location.pathname !== '/' && <Nav onHandleSearch={onSearch}/>  }
         <Routes>
         <Route path="/" element={<Form Login={Login}  />} />
         <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
         />
         <Route path="/about" element={<About />} />
         <Route path="/detail/:id" element={<Detail />} />
         <Route path="/favorites" element={<Favorites onClose={onClose}/>} />
         </Routes>
      </div>
   );
   }

export default App;
