import { createContext, useState } from 'react';

const cartContext = createContext({default:"default"});

const Provider = cartContext.Provider; //va con mayuscula porque es un componente (interno), pero componente al fin




//customProvider
function CartProvider(props){
    
    const [cart, setCart ] = useState([]);
    //estado es inmutable
    //funcion que deberia agregar al carrito()
    function addItem(product, count){

        const newCart = [...cart]; //deepcopy-- shallow copy
        // especie de crud -> create read update delete
        //otra forma de new cart 
        //let otroNewCart= cart.map((item)=>item);
        newCart.push({...product, count}) //puedo hacer un push porque es un nuevo arreglo no el original
        setCart(newCart);

    }
    /*
    function getCountInCart(){
        //reduce
        let total = 0;
        cart.forEach()
    }*/

    return(
          /*el primer par de llaves que lleva es porque escribo javaScript y el segunto es porque es un objeto JS */
        <Provider value={{cart, addItem }}>

            {props.children}

        </Provider>

    )
}
export {cartContext, CartProvider}