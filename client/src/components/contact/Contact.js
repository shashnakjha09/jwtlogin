import React , {useState , useEffect} from 'react'
import "./style.css"
import {useHistory} from "react-router-dom"
function Contact() {
  
  const history = useHistory();

  const[userData , setUserData] = useState({});

  const userContact = async () =>{

      try{
       const res = await fetch("http://localhost:4000/register/contact" , {
           method:"GET",
           credentials: "include",
           headers: {
               "Content-Type" : "appllication/json"
           },
       });
        
       const data = await res.json();

       setUserData(data);

       if(!res.status === 200){
           const err = new Error (res.err);
           throw err;
       }


      }catch(err){
         console.log(err);
         history.push("/login")
      }
  }
  
  useEffect (() => {
          userContact();
  } , []);
  
  
  
    return (
        <>      
               <div className="container-fluid">
                     <div className="item1">
                       <h5 id="item12">Phone</h5>
                         <h6>+91-8002665433</h6>
                     </div>

                     <div className="item2">
                       <h5 id="item12">Email</h5>
                         <h6>jha1994shashank@gmail.com</h6>
                     </div>

                     <div className="item3">
                       <h5 id="item12">Address</h5>
                         <h6>chhatterpur , delhi</h6>
                     </div>
               
               <div className="get-in-touch">
                    <div className="get-in-touch-text"><h4>Get in Touch</h4></div>
                    <br></br>
                    <form method="GET">
                    <div className="get-in-touch-content">
                        <div><input type="text" value={userData.name}  required /></div>
                        <div><input type="text" value={userData.email}  required /></div>
                        <div><input type="text" value={userData.phone}  /></div>  

                    <div className=" container itmes">
                    <textarea class="form-control" rows="3" id="comment" value="500"  >500</textarea>
                    </div>
                    
                    <div className="comment-box">
                    <button type="button" class="btn btn-primary">Sent Message</button>
                    </div>
                    </div>
                    </form>
               </div>
               
             </div>
           
        </>
    )
}

export default Contact
