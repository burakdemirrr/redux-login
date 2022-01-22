import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './loginSlice';

const Login = () => {
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const dispatch=useDispatch();

    const handleSubmit =(e)=>{
        e.preventDefault();

        dispatch(
            login({
                name:name,
                email:email,
                password:password,
                loggedIn:true
            })
        )
    }

    return (
        
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input placeholder="Name" type="name" value={name} onChange={e=>setName(e.target.value)} />
            <input placeholder="EMAİL" type="email" value={email} onChange={e=>setEmail(e.target.value)} />
            <input placeholder="password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
       
            <button
            
            >Login</button>
        </form>

    )
}

export default Login
