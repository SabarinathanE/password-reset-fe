import { useContext, useEffect } from "react";
import { AppCtx } from "../Context/PassContext";
import { loginUser, reset } from "../Api/ApiContent";

export default function Login(){

    //clearing all the field values and mounting only once when the page is opened
    useEffect(()=>{
        setEmail("");
        setPassword("");
        setMsg("");
        setErr("");
    },[])

    
    //context states and values is imported
    const {email,setEmail,password,setPassword,err,setErr,msg,setMsg}=useContext(AppCtx);

    //login function to fetch data
    function handleLogin(){
        const details={
            email,
            password,
        }
        loginUser(details).then((data)=>{
            if(data.error){
              setErr(data.message)
              setMsg("")
            }else{
              setErr("");
              setMsg(data.message);
            }
          }).catch((error)=>console.log("Error loggin in"));
    }

    //reset function to fetch reset link
    function handleReset(){
        const details={
            email,
        }
        reset(details).then((data)=>{
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
        <div className="login" onSubmit={(event)=>event.preventDefault()} >
           
        <form className="form-section">
        <div className="form-group">
            <input type="email" className="form-control" placeholder="Email" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(event)=>setEmail(event.target.value)} required />
        </div>
        <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" id="exampleInputPassword1" value={password} onChange={(event)=>setPassword(event.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={()=>handleReset()}>Reset</button>
        <button type="submit" className="btn btn-primary" onClick={()=>handleLogin()}>Login</button>
        </form>
        <div className="msg-section">
            <div >{msg?msg:""}</div>
            <div >{err?err:""}</div>
        </div>
        </div>
    )
}