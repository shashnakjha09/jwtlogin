import React , {useState} from 'react'
import {useHistory} from "react-router-dom"
import "./style.css"
function Signup() {
    const history = useHistory()
	const [user , setUser] = useState({name:"" , email:"" , phone:"" , work:"" , password:"" , cpassword:""})
    let name , value;
	const handleInputs = (e) => {
		   name = e.target.name;
		   value = e.target.value;

		   setUser({...user , [name]:value});
	}

	const postData = async (e) => {
		e.preventDefault()

		 const {name , email , phone , work , password , cpassword} = user;

		 const res = await fetch("http://localhost:4000/register/register" , {
			 method:"POST",
			 headers: {
				 "Content-Type" : "application/json"
			 },
			 body: JSON.stringify({name, email, phone, work, password, cpassword })

		 });

		 const data = await res.json();
		 if(data.status === 422 || !data){
			 window.alert("Invalid Registration")
			 console.log("Invalid Registration");
		 }
		 else{
			window.alert("Registration successfull")
			console.log("Registration successful");

			history.push("./login");
		 }
	}

    return (
        <div>
            <div className="container">
	<div className="d-flex justify-content-center h-100">
		<div className="card">
			<div className="card-header">
				<h3>Sign Up</h3>
				
			</div>
			<div className="card-body">
				<form  method="POST" onSubmit={postData}>
                <div className="input-group form-group">
						<input type="text" name="name" className="form-control" placeholder="name"  
						value = {user.name}
						onChange={handleInputs} />
					</div>
					<div className="input-group form-group">
						<input type="email" name="email" className="form-control" placeholder="email" 
						value = {user.email}
						onChange={handleInputs} />
					</div>

                    <div className="input-group form-group">
						<input type="text" name="phone" className="form-control" placeholder="phone" 
						value = {user.phone}
						onChange={handleInputs} />
					</div>
                    <div className="input-group form-group">
						<input type="text" name="work" className="form-control" placeholder="work"  
						value = {user.work}
						onChange={handleInputs} />
					</div>

                    <div className="input-group form-group">
						<input type="password" name="password" className="form-control" placeholder="password" 
						value = {user.password}
						onChange={handleInputs} />
					</div>

                   <div className="input-group form-group">
						<input type="password" name="cpassword" className="form-control" placeholder="Confirm password" 
						value = {user.cpassword}
						onChange={handleInputs} />
					</div>
					
					<div className="form-group">
						<input type="submit" name="signup" value="SignUp" className="btn  login_btn" 
						onClick={postData}/>
					</div>
				</form>
			</div>
			
		</div>
	</div>
</div>
        </div>
    )
}

export default Signup
