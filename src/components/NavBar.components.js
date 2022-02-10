import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import { UserContext } from "../utils/Context";

const NavBar = () => {

const {user, setUser } = useContext(UserContext)

    return (
        <>
        <div className="navBar">
        <h1>Max News</h1>
        <nav >
        <Link to='/' className="homeNav">Home</Link>
        <label for='topics'>Topics: 
        <Link to='/articles?topic=cooking' className='cookNav'>Cooking</Link>
        <Link to='/articles?topic=coding' className='codingNav'>Coding</Link>
        <Link to='/articles?topic=football' className='footballNav'>Football</Link>
        </label>
       </nav>
       
        <div className="login">
            {user.username ? (
                <div className='loggedIn'>
                    <p>Logged in as {user.username}</p>
                </div>
            ) : (
                <button className='logBtn' onClick={() => {
                    setUser({
                        username: 'jessjelly',
                        name: 'Jess Jelly',
                        avatar_url: 'https://media.istockphoto.com/photos/red-jelly-pudding-picture-id499660141?k=20&m=499660141&s=612x612&w=0&h=1WCwfMnW8QSR7GD5elBXHUYX3kLfZCWo7b5IYqiDtSA='
                    })
                }}>Log In</button>
            )
            }
        </div>
       
</div>
        </>
    )
}




export default NavBar


