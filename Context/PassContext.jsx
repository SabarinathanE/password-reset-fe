import { createContext,useState } from "react";

//context is created
export const AppCtx=createContext(null);


//children property used so that all the states and values passed can be used by all components
export default function AppContext({children}){

    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");
    const [err,setErr]=useState("");
    const [msg,setMsg]=useState("");

    return(
        <AppCtx.Provider
        value={{
            user,setUser,password,setPassword,err,setErr,msg,setMsg
        }}
        >
            {children}
        </AppCtx.Provider>
    )
}