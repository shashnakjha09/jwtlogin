import React , {useEffect , useState} from 'react';
import {useHistory} from "react-router-dom"
import "./style.css"
import shashank from "../../image/shashank.jpg"
function Home() {
  const history = useHistory();

  const[userName , setUserName] = useState({});
  const[show , setShow] = useState([false]);

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

       setUserName(data);
       setShow(true);

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
          <div className="container">
            <div className="home">
                <img src={shashank} alt="shashank"/>
            <h6 id="home-heading">WELCOME</h6>
            <h3>{userName.name}</h3>
            <h2 id="home-para">{show ? "Happy, to see you back" : "We Are The MERN Devloper"}</h2>
            </div>
          </div>
        </>
    )
}

export default Home
