import { Link } from 'react-router-dom';
import style from './Card.module.css'
import { Tooltip as ReactTooltip } from 'react-tooltip'

const Card = (props)=> {

   const favs = JSON.parse(localStorage.getItem('odontologosFavs'));
   const isFavorite = favs.some((fav) => fav.id === props.user.id);
   const tooltipText = isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos';

    return (
         <div className={style.card}>
            <div className={style.cardContent}>
               <img src="src\assets\img\user.png" alt="" />
               <div className={style.cardText}>
                  <h3>{props.user.name}</h3>
                  <p>{props.user.username}</p>
               </div>
            </div>
            <div className={style.cardFooter}>
               <a onClick={()=> props.onClick(props.user)} data-tooltip-content={tooltipText} data-tooltip-id="heartTooltip">
                  {isFavorite ? <i className={style.heartSolid +" fa-solid fa-heart"}></i>:<i className="fa-light fa-heart"></i>}
               </a>
               <Link  data-tooltip-content="Ver detalles" data-tooltip-id="favTooltip" to={`/dentist/${props.user.id}`}><i className="fa-light fa-circle-info"></i></Link>
            </div>
            <ReactTooltip id="heartTooltip" place="top" effect="solid">
               {tooltipText}
            </ReactTooltip>
            <ReactTooltip id="favTooltip" place="top" effect="solid">
               Ver detalles
            </ReactTooltip>
         </div>
         );
}

export default Card;