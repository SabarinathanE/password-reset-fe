import { useNavigate } from "react-router-dom";

export default function TopBar(){
    //topbar component
    //navigate is used to switch between home page and add user page
    const navigate=useNavigate();
    return(
        <div className="top-bar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#" onClick={()=>navigate("/")}>Home</a>
                <a className="navbar-brand" href="#" onClick={()=>navigate("/register")}>Register</a>
            </div>
            </nav>
        </div>
    )
}