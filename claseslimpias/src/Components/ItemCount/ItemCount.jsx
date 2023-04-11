import React, {useState} from 'react'
import Button from '../Button/Button';

export default function ItemCount({stock, onAddToCart}) {
    
    const[ count, setCount] = useState(1);


    function handleAdd(){
        if (count < stock){
           setCount(count + 1);
        }
        else{
            alert("no esa cantidad de productos");
        }
    }
    function handleSubstract(){
        if (count>1){
           setCount(count - 1);
        }
        else{
            alert("no se puede tener menos de 1 producto");
        }
    }

    return (
    <div   >
        <Button color="red" onClick={handleSubstract}> - </Button>
        <span> {count} </span>
        <Button color="blue" onClick={handleAdd}> + </Button> 
        <Button onClick={()=> onAddToCart(count)} >Agregar al carrito</Button>
    </div> )
}

