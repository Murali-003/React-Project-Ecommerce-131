import React, {useState} from 'react'
import './App2.css'
import { Link} from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

const AppSignup = () => {
    
    const[formData,setFormData] = useState(
        {
            username:"",
            email:"",
            password:"",
            confirmPassword:""
    })

    const handleInputChange = (e) =>{
            setFormData({...formData,[e.target.name]:e.target.value})
    }

    const submitHandler = async(event) =>{
        event.preventDefault();

        try{
            const response = await fetch("http://localhost:3000/users",{
                method:'POST',
                headers:{
                    "Content-Type": "applications/json",
                },
                body: JSON.stringify(formData),
            });
            if(response.ok){
                console.log("Success")
                alert("success")
            }
        }catch(error){
            console.log(error)
        }
    }
  
    return (
    <div>
          <div className='wrapper'>
            <form onSubmit={submitHandler}>

                <h2><center>Register</center></h2>

                <div className='input-box'>
                        <input type="text" name='username' placeholder='Username' onChange={handleInputChange} value={formData.username} required/>
                        <FaUser className='icon'/>
                </div>

                <div className='input-box'>
                        <input type="email" name='email' placeholder='Email' onChange={handleInputChange} value={formData.email} required/>
                        <MdEmail className='icon'/>
                </div>
                
                <div className='input-box'>
                        <input type="password" name='password' placeholder='Password' onChange={handleInputChange} value={formData.password} required/>
                        <FaLock className='icon'/>
                </div>
                <div className='input-box'>
                        <input type="password" name='confirmPassword' placeholder='Confirm Password' onChange={handleInputChange} value={formData.confirmPassword} required/>
                        <FaLock className='icon'/>
                </div>

                <div className='remember-forgot'>
                    <label><input type="checkbox" />Remember me</label> 
                </div>

                <button type='submit'  className="bg-blue-500 text-white font-bold py-2 px-4 rounded transition-transform duration-300 hover:bg-blue-600 hover:scale-105 hover:shadow-lg">Register</button>
                
                <div style={{textAlign:'right'}}>
                    <Link to="/">
                        <li style={{listStyle:"none",color:'blue'}} className='px-1 py-2 hover:text-blue-500 transform transition-transform duration-300 hover:scale-110'>Back to log in</li>
                    </Link>
                </div>

            </form>

            <div>
                <img src="https://masterbundles.com/wp-content/uploads/2022/12/shopping-logo-158.jpg" alt="top-image" className='top-right-image' />
            </div>
            
        </div>
        </div>
    )
};

export default AppSignup
