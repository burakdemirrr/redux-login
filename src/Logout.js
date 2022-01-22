import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from './loginSlice';

const Logout = ({user}) => {
    const dispatch=useDispatch();

    const handleLogout = ()=>{

        dispatch(
            logout()
        );

    }

    return (
        <div>
            <h1>Welcome {user.email}</h1>
            <h1>Welcome {user.name}</h1>
            <h1>Welcome {user.password}</h1>
            <button onClick={()=>handleLogout()}>Logout</button>

        </div>
    )
}

export default Logout
