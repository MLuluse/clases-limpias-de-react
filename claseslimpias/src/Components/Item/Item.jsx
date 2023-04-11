import Button from '../Button/Button';
import './item.css';
import {Link} from 'react-router-dom'
import { useState } from 'react';

//aca lo exporto desde la fundacion

export default function Item(props){
  const [fav, setFav]=useState(false);
  function handleFavourite(
  ){
    setFav(!fav);
  }
  let classNameFavourite;
  if(fav=== true){
    classNameFavourite = "item-card_favicon favourite";
  } else{
    classNameFavourite = "item-card_favicon";
  }
 
    return(
   
       <div id={props.id} className="item-card">
       <button onClick={handleFavourite} className={classNameFavourite}> ❤️ </button>

       <div className="item-card_header">
       <h4>{props.title}</h4>
       </div>

       <div className='item-card_img'>
       <img src={props.img} alt="imagen" />
       </div>

       <div className='item-card_detail'>
       <h3>{props.price}</h3>
       <small>{props.description}</small>
       </div>
       
       <Link to={`/detalle/${props.id}`}>
       <Button> Ver Detalles</Button>
       </Link>


      </div>

    )

}

