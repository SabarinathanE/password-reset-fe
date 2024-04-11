import Mainspace from "../Components/Content";
import Login from "../Components/Login";

export default function HomePage(){
    return(
        //Login Component is setted as children for a Mainspace component
        <Mainspace>
            <Login/>
        </Mainspace>
    )
}