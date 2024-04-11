import Mainspace from "../Components/Content";
import Register from "../Components/Register";

export default function RegisterPage(){

    return(
        //register component is setted as children for mainspace component
        <Mainspace>
           <Register/>
        </Mainspace>
    )
}