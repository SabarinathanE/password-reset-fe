import { useContext, useEffect } from "react";
import { AppCtx } from "../Context/PassContext";
import { registerUser } from "../Api/ApiContent";

export default function Register(){
 //clearing all the field values and mounting only once when the page is opened
    useEffect(()=>{
        setUser("");
        setPassword("");
        setMsg("");
        setErr("");
    },[])
 //context states and values is imported
    const {user,setUser,password,setPassword,err,setErr,msg,setMsg}=useContext(AppCtx);

    //register user function to fetch data and display response
    function handleRegister(){
        const value={
            user,
            password,
        }
        if(user && password) {
            registerUser(value).then((data)=>{
                if(data.error){      
                  setErr(data.message)
                  setMsg("")

                }else{
                  setErr("");
                  setMsg(data.message);
                }
                
              }).catch((error)=>console.log(error));
        } else alert("Enter your Email First")
        setUser("")
        setPassword("")
    }

    return(
        <div className="register">
           
        <form onSubmit={(event)=>event.preventDefault()} className="form-section">
        <div className="form-group">
            <input type="email" placeholder="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={user} onChange={(event)=>setUser(event.target.value)}/>
        </div>
        <div className="form-group">
            <input type="password" placeholder="password" className="form-control" id="exampleInputPassword1"  value={password} onChange={(event)=>setPassword(event.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={()=>handleRegister()}>Register</button>
        </form>
        <div className="msg-section"> 
            <div >{msg?msg:""}</div>
            <div >{err?err:""}</div>
        </div>
        
        </div>
    )
}