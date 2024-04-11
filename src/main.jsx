import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import AppContext from '../Context/PassContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  
   //app context for using states and browser router for navigating between pages
   <AppContext>
      <BrowserRouter>
      <App />
      </BrowserRouter>
   </AppContext>
  

)