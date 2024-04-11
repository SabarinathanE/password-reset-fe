import { API } from "./Apis";


//to get all data
export default async function getAllData(){
    try {
        const res=await fetch(`${API}`,{
            method:"GET",
        })
        const data=await res.json();
        return data;
    } catch (error) {
        console.log("error while getAllData",error)
    }
    
}

//to login user using email and password
export async function loginUser(details){
    try {
        const res=await fetch(`${API}/login`,{
            method:"POST",
            body:JSON.stringify(details),
            headers:{
                "Content-type":"application/json",
            }
        })
        const data=await res.json();
        return data;
    } catch (error) {
        console.log("error while loginUser",error)
    }
    
}

//to sign up user using email and password
export async function registerUser(details){
    try {
        const res=await fetch(`${API}/signup`,{
            method:"POST",
            body:JSON.stringify(details),
            headers:{
                "Content-type":"application/json",
            }
        })
        const data=await res.json();
        return data;
    } catch (error) {
        console.log("error while register",error)
    }
    
}

//to send mail with reset link 
export async function reset(details){
    try {
        const res=await fetch(`${API}/reset`,{
            method:"POST",
            body:JSON.stringify(details),
            headers:{
                "Content-type":"application/json",
            }
        })
        const data=await res.json();
        return data;
    } catch (error) {
        console.log("error while sending reset",error)
    }
    
}

//to change the password
export async function resetPage(password,string){
    try {
        const res=await fetch(`${API}/reset/link/${string}`,{
            method:"POST",
            body:JSON.stringify(password),
            headers:{
                "Content-type":"application/json",
            }
        })
        const data=await res.json();
        return data;
    } catch (error) {
        console.log("error while sending reset",error)
    }
    
}