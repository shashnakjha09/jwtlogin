import React , {useState , useEffect , useContext} from 'react'
import {useHistory} from 'react-router-dom'
// import axios from "axios"
import {UserContext} from "../../App"
import './style.css'
function Login() {

	const {state , dispatch} = useContext(UserContext)

    const usehistory = useHistory()
	const[email , setEmail] = useState('');
	const[password , setPassword] = useState('');

	const loginUser = async (e) =>{
		e.preventDefault();

		const res = await fetch("http://localhost:4000/register/login" , {
			 method:"POST",
			 credentials: 'include',
			 body : JSON.stringify({email,password }),
			 headers: {
				'Access-Control-Allow-Origin' : '*',
				'Content-Type':'application/json'
			},
		 });

		  const data =  res.json();
		 if(res.status === 400 || !data ){
               window.alert("Invalid Crediential");
		 }

		 else{
			 dispatch({type: "USER" , payload:true})
			 window.alert("Login Successfull")
			 usehistory.push("/");
		 }
        
	}



    return (
        <div>
             <div className="container">
	<div className="d-flex justify-content-center h-100">
		<div className="card">
			<div className="card-header">
				<h3>Sign In</h3>
				
			</div>
			<div className="card-body">
				<form method="POST">
                <div className="input-group form-group">
						<input type="email" name= "email" className="form-control" placeholder="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)} />
					</div>
					<div className="input-group form-group">
						<input type="password" name="password" className="form-control" placeholder="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)} />
					</div>

					<div className="form-group">
						<input type="submit" onClick={loginUser} name="submit" value="Login" className="btn login_btn"  />
					</div>
				</form>
			</div>
			
		</div>
	</div>
</div>
        </div>
    )
}

export default Login
