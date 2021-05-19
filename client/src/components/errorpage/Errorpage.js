import React from 'react'
import "./style.css"
import {Link} from "react-router-dom";
function Errorpage() {
    return (
        <>
             <div className="container">
                     <div className="main-heading">
                         <h3 id="main-heading">WE ARE SORRY , PAGE NOT FOUND</h3>
                     </div>

                     <div className="main-para">
                         <p id="main-para">THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED OR NAMECHANGED OR IS TEMPRORELY UNAVALIBLE!</p>
                     </div>

                     <div className="main-button">
                     <Link to="/"><button type="button" class="btn btn-primary">Go To HomePage</button></Link>
                     </div>
                 </div>
        </>
    )
}

export default Errorpage
