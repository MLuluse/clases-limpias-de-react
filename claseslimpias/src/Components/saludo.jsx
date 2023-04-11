import Button from "./Button/Button";

function Saludo(props){
   {/* function getUsername(){
      return "Gaston"
    }
  let usuario = getUsername()
  {id:1, //super necesario poner Key en forma de ID
         title: "Remera A",
         price: 100,
         descrption: "remera de algodon",
         img: "/img/remera.jpg",
         category:"remera",
        },
        {id:2,
        title: "Pantalon",
        price: 300,
        descrption: "pantalon de algodon",
        img: "/img/pantalon.jpeg",
        category:"pantalon",
        },
        {id:3,
        title: "Buzo",
        price: 500,
        descrption: "Buzo de algodon",
        img: "/img/buzo.jpeg",
        category:"buzos",
        },]


*/}
  
    const styleSaludo = {
      marginTop: "50px",
      fontSize: "60px",
    }
  
    return (
      <div style={styleSaludo}> {props.texto}
      <Button color="darkblue" text ="ver mas"/>
      {/*{usuario}*/}
      </div>
      );
  }

