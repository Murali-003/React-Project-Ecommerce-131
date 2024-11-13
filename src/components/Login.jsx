import React, { useState } from 'react';
import './App.css';
import { Link, useNavigate } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

const Applogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            
            // Fetch users from db.json
            const response = await fetch('http://localhost:3000/users');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const users = await response.json(); // Call .json() to parse the response

            // Check if user is registered
            const user = users.find(user => user.email === email);

            if (user) {
                // If user is found, check the password
                if (user.password === password) {
                    navigate('/home'); // Navigate to the home page
                } else {
                    setErrorMessage('Invalid password'); // Set error message for incorrect password
                }
            } else {
                setErrorMessage('You need to register'); // Set error message if user not found
            }
        } catch (error) {
            console.error('Error fetching users:', error);
            setErrorMessage('Failed to fetch user data');
        }
    };

    return (
        <div className='wrapper'>
            <form onSubmit={handleLogin}>
                <h1>Login</h1>

                <div className='input-box'>
                    <MdEmail className='icon' />
                    <input 
                        type="email" 
                        name='email' 
                        placeholder='Email' 
                        required 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>

                <div className='input-box'>
                    <FaLock className='icon' />
                    <input 
                        type="password" 
                        name='password' 
                        placeholder='Password' 
                        required 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>

                <div className='remember-forgot'>
                    <label><input type="checkbox" />Remember me</label>
                    <a href="1" style={{ color: 'blue' }} className='hover:text-blue-500 transform transition-transform duration-300 hover:scale-110'>Forgot password?</a>
                </div>

                <button type='submit' className='bg-blue-500 text-white font-bold py-2 px-4 rounded transition-transform duration-300 hover:bg-blue-600 hover:scale-105 hover:shadow-lg'>
                        Login
                </button>

                {errorMessage && <p className='text-red-700'>{errorMessage}</p>}

                <Link to={'./signup'} className='flex justify-between pt-3'>
                    <p className='py-3'>New user</p>
                    <p className="arrow">→</p>
                    <a href="2" style={{ color: 'blue' }} className='py-3 hover:text-blue-500 transform transition-transform duration-300 hover:scale-110'>
                        <h4> Register here</h4>
                    </a>
                </Link> 
            </form>
            
            <div>
                <img src="https://masterbundles.com/wp-content/uploads/2022/12/shopping-logo-158.jpg" alt="top-image" className='top-right-image' />
            </div>
        </div>
    );
};

export default Applogin;
