import TopBar from "./Navbar";

export default function Mainspace({children}){
    return(
        //top bar is setted as common for the mainspace is the children is used as changable for all pages
        <div className="main-space">
            <div>
            <TopBar/>
            </div>
            <div>
            {children}
            </div>
        </div>
    )
}