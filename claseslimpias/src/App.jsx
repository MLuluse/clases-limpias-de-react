
import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailConatainer from './Components/ItemDetailContainer/ItemDetailConatiner';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { CartProvider } from './storeContext/cartContext';



/*ir a localhost:3000 "/" la barra sola es lo que te manda al inicio si le pongo /detalle /nombre me manda ahi */
function App() {
  return (
  
   <CartProvider > 
    
    <BrowserRouter>
    
    <NavBar/>

     <Routes>
     
       <Route path="/" element={  <ItemListContainer/> } />
       <Route path="/detalle/:id" element={  <ItemDetailConatainer/> } />
       <Route path="/category/:categoryid" element={<ItemListContainer/>}/>
       <Route path="/prueba" element={<h1>Prueba de ruta</h1>} />
       <Route path="*" element={<h1>Error 404: Page not found</h1>}/>
 
      
    </Routes>

    {/* Footer */}
  </BrowserRouter>
  </CartProvider>

  );
}

export default App;

