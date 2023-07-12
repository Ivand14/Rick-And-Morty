import Card from '../Card/Card'
import style from './Cards.module.css'

export default function Cards(props) {
   return <div className={style.contenedor}>
      {props.characters.map((personajes)=>(
         <Card
            key={personajes.id}
            id={personajes.id}
            name={personajes.name}
            status={personajes.status}
            species={personajes.species}
            gender={personajes.gender}
            origin={personajes.origin.name}
            image={personajes.image}
            onClose={props.onClose} 
         />
      ))}

   </div>;
}
