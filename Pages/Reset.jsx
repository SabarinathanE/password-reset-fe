import Mainspace from "../Components/Content";
import ResetForm from "../Components/Reset";

export default function ResetPage(){
    return(
        //resetForm component is setted as children for mainspace component
        <Mainspace>
            <ResetForm/>
        </Mainspace>
    )
}