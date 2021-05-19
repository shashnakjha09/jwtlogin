import React, { useEffect, useState } from 'react'
import {useHistory} from "react-router-dom"
import "./about.css"
import shashank from "../../image/shashank.jpg"
import shashank1 from "../../image/shashank1.jpg"


function About() {

    const history = useHistory();

    const[userData , setUserData] = useState({});

    const callAboutPage = async () =>{
       
     

        try{

            const response1 = await fetch("http://localhost:4000/register/about" , {
                method : "GET",
                credentials: "include",
                headers: {
                    Accept : "application/json",
                    "Content-type" : "application/json"
                }
            });

            const data = await response1.json();

            console.log(response1);
            setUserData(data)

            if(!response1.status === 200){
                const error = new Error(response1.error);
                throw error;
                // console.log("error");

            }

        }catch(err){
           console.log(err);
           history.push("/login");

        }
            
    }
    
    useEffect (() => {
            callAboutPage();
    } , []);
    

    return (
        <>   
            <br></br>
            <div className="container">
                 <div className="first">
                 <div className="image">
                     <img src={userData.name === "adityasada" ? shashank : shashank1} alt="shshank"/>
                 </div>

                 <div>
                     <h6 id="name">{userData.name}</h6>
                     <h6 id="work">{userData.work}</h6>
                     <h6 id="rank">RANKING : <strong>1/10</strong></h6>
                 </div>

                 <div className="edit-profile">
                     <button type = "button" id="button">Edit Profile</button>
                 </div>
                 </div>
                 <br></br>
                 <div className="extra-about">
                 <div className="social-extra">
                     {/* <h6>Youtube</h6> */}
                     <h6>Instagram</h6>
                     <h6>Linked-In</h6>
                     <h6>Web Developer</h6>
                     <h6>Designer</h6>
                     <h6>Software Engineer</h6>

                 </div>
                 <div className="personal-info">
                     {/* <h6>Youtube</h6> */}
                     <h6>UserID</h6>
                     <h6>Name</h6>
                     <h6>Email</h6>
                     <h6>Phone</h6>
                     <h6>Profession</h6>
                 </div>

                 <div className="personal-info-content">
                 {/* <h6>Youtube</h6> */}
                     <h6>{userData._id}</h6>
                     <h6>{userData.name}</h6>
                     <h6>{userData.email}</h6>
                     <h6>{userData.phone}</h6>
                     <h6>{userData.work}</h6>
                 </div>
                 </div>
           </div>  
        </>
    )
}

export default About
