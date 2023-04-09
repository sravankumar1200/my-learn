import  React from "react"
import  ReactDOM  from "react-dom";
import  './index.css'; 
const Navbar =() =>{
    return(
      
        <nav className="Mainnav">
            <img 
            alt="hello"
            src="https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg" width={'40px'}>
            </img>
            <ul className="Navitems">
                <li>projects </li>
                <li>Insights</li>
            </ul>

        </nav>
      
    )
}
export default Navbar;