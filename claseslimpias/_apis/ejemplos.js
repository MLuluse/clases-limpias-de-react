const data = fetch("https://pokeapi.co/api/v2/pokemon/ditto") //endpiont
                 .then((response)=>{return response.json();})
                 .then((json)=>{console.log(json);})
                 
                 .catch(error=>console.log( error))
                 .finally()

console.log(data);



