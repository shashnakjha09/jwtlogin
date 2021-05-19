import React , {useEffect , useContext} from 'react'
import {useHistory} from "react-router-dom";
import {UserContext} from "../../App"

function Logout() {

    const {state , dispatch} = useContext(UserContext)


    const history = useHistory();

    useEffect(() =>{
        fetch("http://localhost:4000/register/logout" , {
            method:"GET",
            credentials: "include",
           headers: {
            Accept : "application/json",
               "Content-Type" : "appllication/json"
           },
        }).then((res) =>{
            dispatch({type: "USER" , payload:false})
               history.push("/login" , {replace:true});
               if(!res.status === 200){
                   const error = new Error(res.error);
                   throw error;
               }
        }).catch((err) =>{
            console.log(err);
        })
    })

    return (
        <>
           <h1>logout ka page</h1> 
        </>
    )
}

export default Logout
