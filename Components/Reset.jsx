import { useContext, useEffect } from "react";
import { AppCtx } from "../Context/PassContext";
import { useParams } from "react-router-dom";
import { resetPage } from "../Api/ApiContent";

export default function ResetForm(){

//getting value from params and storing 
    const params=useParams();
    const string=params.string;
   
 //clearing all the field values and mounting only once when the page is opened
    useEffect(()=>{
        setPassword("");
        setMsg("");
        setErr("");
    },[])
  //context states and values is imported
    const {password,setPassword,err,setErr,msg,setMsg}=useContext(AppCtx);

    //reset function to reset password
    //string is passed to fetch
    function handleReset(string){
        const details={
            password,
        }
        resetPage(details,string).then((data)=>{
            if(data.error){
              setErr(data.message)
              setMsg("")
            }else{
              setErr("");
              setMsg(data.message);
            }
          }).catch((error)=>console.log(error));
    
    }
    return(
        <div className="reset-user">
           
           <form onSubmit={(event)=>event.preventDefault()} className="form-section">
            <div className="form-group">
                <input type="password" placeholder="Enter new password" className="form-control" id="exampleInputPassword1"  value={password} onChange={(event)=>setPassword(event.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={()=>handleReset(string)}>Reset</button>
            </form>
            <div className="msg-section">
            <div >{msg?msg:""}</div>
            <div >{err?err:""}</div>
            </div>
         

        </div>
    )
}