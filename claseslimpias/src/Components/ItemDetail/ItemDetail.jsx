import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { cartContext } from "../../storeContext/cartContext";




function ItemDetail(props){

  const{cart, addItem} = useContext(cartContext);
  console.log("cart: ", cart)
  

  function handleAddToCart(props, count){
    console.log("Agregaste al carrito:", props.title);
    console.log("cantidad selecionada", count);
  
  
  
  }

  function onAddToCart(count){
    handleAddToCart(props, count)
    addItem(props, count)
  }



    return(
    <div className="item-card">
       <div className="item-card_header">
       <h4>{props.title}</h4>
       </div>
       <img src={props.img} alt="imagen" />
       <h3>{props.category}</h3>
       <h3>Precio: ${props.price}</h3>
       <h5>{props.description}</h5>
       <ItemCount stock= {10}
       onAddToCart={onAddToCart}/>
       
    </div>
    )

}

export default ItemDetail;