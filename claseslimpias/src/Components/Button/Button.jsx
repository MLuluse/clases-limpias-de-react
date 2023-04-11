import "./button.css";

const Button = ( props ) =>{
    console.log("---->", props);

    const styleButton = {

         backgroundColor: props.color ||"#222222" ,

    }  
    return (
        <button 
        onClick={props.onClick}
        disbled={props.disabled} 
        className="btn" 
        style={styleButton} > 
        {props.text} 
        {props.children}
        </button> 
    )
}

export default Button; 