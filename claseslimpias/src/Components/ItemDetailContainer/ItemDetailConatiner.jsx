//lugar donde se va a guardar el detalle de un producto
import { useState, useEffect } from 'react';
import Flex from '../Flex/Flex';
import productsDatabase from '../../data/products';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


/*---------funcion asincronica------->*/
function getSingleItem(idURL){
   const promesa = new Promise((resolve, reject)=>{
      setTimeout(
      () => {
        const itemRequested = productsDatabase.find(item =>{
          return (item.id === parseInt(idURL) )
        })
        resolve(itemRequested)
       },1000)
     } )
     return promesa;
   }
//---------------<>----------------
function ItemDetailConatainer(){
    const [product, setProduct] = useState([]);
/*{id : num}  debe coincidir el let de useParams con el getSingleItem del useEffect con el :id (nombre de segmento)que se pasa en App.jsx*/
    let {id} =useParams();
    console.log(id);

    useEffect(
        ()=>{
             //aca levanta con el then el resolve la promesa 
           getSingleItem(id).then((respuesta) => {

           console.log("promesa cumplida", respuesta);

           setProduct(respuesta) ;
           });
          },
          []
        );


//aca deveria devolver un ItemDetail
    return(
        <div>
            <Flex>
            <ItemDetail
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            img ={product.img}/>


        </Flex>
        </div>

    )

}

export default ItemDetailConatainer;